"use client";

import { useEffect } from "react";
import * as THREE from "three";

const LEAF_TEXTURE = "/a/generated/threejs-summer-leaf.png";

type Cloud = {
  sprite: THREE.Sprite;
  yRatio: number;
  widthRatio: number;
  phase: number;
  speed: number;
  startOffset: number;
};

type LeafFlight = {
  yRatio: number;
  amplitudeRatio: number;
  crossSway: number;
  waveOne: number;
  waveTwo: number;
  phaseA: number;
  phaseB: number;
  rotationStart: number;
  rotationRange: number;
  speed: number;
};

function createCloudTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 240;

  const context = canvas.getContext("2d");
  if (!context) return new THREE.CanvasTexture(canvas);

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.filter = "blur(5px)";

  const cloudPuffs = [
    [116, 136, 90, 42, 0.34],
    [204, 110, 126, 54, 0.46],
    [324, 116, 154, 58, 0.5],
    [464, 128, 116, 48, 0.4],
    [542, 142, 76, 34, 0.3],
  ] as const;

  for (const [x, y, radius, height, opacity] of cloudPuffs) {
    const gradient = context.createRadialGradient(x, y, 8, x, y, radius);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
    gradient.addColorStop(0.58, `rgba(255, 255, 255, ${opacity * 0.62})`);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    context.fillStyle = gradient;
    context.beginPath();
    context.ellipse(x, y, radius, height, 0, 0, Math.PI * 2);
    context.fill();
  }

  context.filter = "none";
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function createLeafFlight(): LeafFlight {
  return {
    yRatio: 0.16 + Math.random() * 0.2,
    amplitudeRatio: 0.045 + Math.random() * 0.07,
    crossSway: 8 + Math.random() * 18,
    waveOne: 1.6 + Math.random() * 1.4,
    waveTwo: 3.4 + Math.random() * 2.2,
    phaseA: Math.random() * Math.PI * 2,
    phaseB: Math.random() * Math.PI * 2,
    rotationStart: -1.2 + Math.random() * 0.7,
    rotationRange: 1.4 + Math.random() * 1.2,
    speed: 0.022 + Math.random() * 0.012,
  };
}

function animateAtmosphere(canvas: HTMLCanvasElement) {
  if (typeof window.WebGLRenderingContext === "undefined") return () => undefined;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas,
      preserveDrawingBuffer: true,
      powerPreference: "low-power",
    });
  } catch {
    return () => undefined;
  }

  canvas.dataset.engine = `three.js r${THREE.REVISION}`;
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 2;

  const cloudTexture = createCloudTexture();
  const clouds: Cloud[] = [
    { yRatio: 0.34, widthRatio: 0.18, phase: 0.2, speed: 6, startOffset: 0.16 },
    { yRatio: 0.27, widthRatio: 0.14, phase: 2.6, speed: 4, startOffset: 0.72 },
  ].map((cloud, index) => {
    const material = new THREE.SpriteMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.66 - index * 0.08,
      depthWrite: false,
      depthTest: false,
    });
    const sprite = new THREE.Sprite(material);
    sprite.renderOrder = 1;
    scene.add(sprite);
    return { sprite, ...cloud };
  });

  const leafTexture = new THREE.TextureLoader().load(LEAF_TEXTURE, (texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    texture.needsUpdate = true;
  });
  const leafMaterial = new THREE.SpriteMaterial({
    map: leafTexture,
    transparent: true,
    opacity: 0,
    alphaTest: 0.02,
    depthWrite: false,
    depthTest: false,
  });
  const leaf = new THREE.Sprite(leafMaterial);
  leaf.renderOrder = 2;
  scene.add(leaf);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let animationFrame = 0;
  let viewport = { width: 1, height: 1 };
  let leafProgress = 0.02;
  let flight = createLeafFlight();
  let previousFrame = performance.now();
  let elapsed = 0;

  const cloudX = (cloud: Cloud, cloudWidth: number, elapsed: number) => {
    const span = viewport.width + cloudWidth + 160;
    const travelled = (elapsed * cloud.speed + cloud.startOffset * span) % span;
    return viewport.width / 2 + cloudWidth / 2 + 80 - travelled;
  };

  const renderStill = () => {
    for (const cloud of clouds) {
      const width = Math.max(130, viewport.width * cloud.widthRatio);
      cloud.sprite.scale.set(width, width * 0.34, 1);
      cloud.sprite.position.set(cloudX(cloud, width, 0), viewport.height * cloud.yRatio, 0);
    }

    const size = Math.max(28, Math.min(44, viewport.width * 0.027));
    leaf.scale.set(size, size, 1);
    leaf.position.set(viewport.width * 0.32, viewport.height * 0.18, 0);
    leaf.rotation.z = -0.48;
    leafMaterial.opacity = 0.72;
  };

  const resize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    viewport = { width, height };
    renderer.setSize(width, height, false);
    camera.left = width / -2;
    camera.right = width / 2;
    camera.top = height / 2;
    camera.bottom = height / -2;
    camera.updateProjectionMatrix();
    renderStill();
    renderer.render(scene, camera);
  };

  const draw = () => {
    const currentFrame = performance.now();
    const delta = Math.min((currentFrame - previousFrame) / 1000, 0.1);
    previousFrame = currentFrame;
    elapsed += delta;

    for (const cloud of clouds) {
      const width = Math.max(130, viewport.width * cloud.widthRatio);
      cloud.sprite.position.x = cloudX(cloud, width, elapsed);
      cloud.sprite.position.y = viewport.height * cloud.yRatio + Math.cos(elapsed * 0.035 + cloud.phase) * 3;
    }

    leafProgress += delta * flight.speed;
    if (leafProgress >= 1) {
      leafProgress %= 1;
      flight = createLeafFlight();
    }

    const progress = leafProgress;
    const travelWidth = viewport.width + 260;
    const size = Math.max(28, Math.min(44, viewport.width * 0.027));
    const edgeOpacity = Math.min(1, progress * 7, (1 - progress) * 7);

    leaf.scale.set(size * (1 + Math.sin(elapsed * 1.4) * 0.06), size, 1);
    leaf.position.set(
      viewport.width / 2 + 130 - travelWidth * progress + Math.sin(progress * Math.PI * 2 * flight.waveOne + flight.phaseA) * flight.crossSway,
      viewport.height * flight.yRatio + Math.sin(progress * Math.PI * 2 * flight.waveOne + flight.phaseA) * viewport.height * flight.amplitudeRatio + Math.sin(progress * Math.PI * 2 * flight.waveTwo + flight.phaseB) * viewport.height * flight.amplitudeRatio * 0.44,
      0,
    );
    leaf.rotation.z = flight.rotationStart + progress * flight.rotationRange + Math.sin(elapsed * 1.7 + flight.phaseB) * 0.34;
    leafMaterial.opacity = 0.82 * edgeOpacity;

    renderer.render(scene, camera);
    animationFrame = window.requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize);
  if (reducedMotion) renderer.render(scene, camera);
  else animationFrame = window.requestAnimationFrame(draw);

  return () => {
    window.removeEventListener("resize", resize);
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    scene.remove(leaf);
    clouds.forEach(({ sprite }) => {
      scene.remove(sprite);
      sprite.material.dispose();
    });
    leafMaterial.dispose();
    leafTexture.dispose();
    cloudTexture.dispose();
    renderer.dispose();
  };
}

export function AtmosphereController() {
  useEffect(() => {
    let activeCanvas: HTMLCanvasElement | null = null;
    let stopAnimation: (() => void) | null = null;

    const attach = () => {
      const nextCanvas = document.querySelector<HTMLCanvasElement>("canvas.forest2-atmosphere-canvas");
      if (nextCanvas === activeCanvas) return;
      stopAnimation?.();
      activeCanvas = nextCanvas;
      stopAnimation = nextCanvas ? animateAtmosphere(nextCanvas) : null;
    };

    attach();
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      stopAnimation?.();
    };
  }, []);

  return null;
}
