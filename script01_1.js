//var canvas = document.getElementById("renderCanvas");
//var engine = new BABYLON.Engine(canvas, true);

var CreateScene01_1 = function () 
{
   var scene = new BABYLON.Scene(engine);
   scene.createDefaultCameraOrLight(true, true, true);
   // https://doc.babylonjs.com/divingDeeper/behaviors/cameraBehaviors#autorotation-behavior
   scene.activeCamera.useAutoRotationBehavior = true;
   scene.lights[0].dispose();
   scene.activeCamera.setTarget( new BABYLON.Vector3(0, 1.2, 0) );
   scene.activeCamera.setPosition(new BABYLON.Vector3(-0.75, 1.75, -0.75));
   scene.activeCamera.defaultElevation = 0.5 
   scene.activeCamera.zoomStopsAnimation = false

   //var hemi = new BABYLON.HemisphericLight("hemi", BABYLON.Vector3.Up());
   var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);
   light.intensity = 0.5;

   //var light      = new BABYLON.DirectionalLight("light1", new BABYLON.Vector3(-2, -3, 1), scene);
   light.position = new BABYLON.Vector3(6, 9, 3);
   var generator  = new BABYLON.ShadowGenerator(512, light);
   generator.useBlurExponentialShadowMap = true;
   generator.blurKernel = 32;

   for(var i = 0; i < scene.meshes.length; i++) generator.addShadowCaster(scene.meshes[i]);   
   
   var helper = scene.createDefaultEnvironment({
      enableGroundMirror: true,
      groundShadowLevel: 1.0,
   });       

   //helper.setMainColor(BABYLON.Color3.Black());

   //var camera = new BABYLON.ArcRotateCamera("Camera", 3.14159/2, 3.14159/2, 1, BABYLON.Vector3.Zero(), scene);
   //camera.attachControl(canvas, false);
   //camera.setPosition(new BABYLON.Vector3(1, 1, 1));
   //camera.setTarget(new BABYLON.Vector3(1, 1, 1));

   // Meshes 
   BABYLON.SceneLoader.ImportMesh("", "./", "test02_1.gltf", scene, function (newMeshes) 
   {
      //camera.target = newMeshes[0];
      //scene.defaultMaterial.backFaceCulling = false;
   });

   /* 
   BABYLON.SceneLoader.ImportMesh("", "./", "test03_1.gltf", scene, function (newMeshes) 
   {
      //camera.target = newMeshes[0];
      //scene.activeCamera = camera; 
      //scene.defaultMaterial.backFaceCulling = false;
   });
   */

   // Move the light with the camera
   //scene.registerBeforeRender(function (){light.position = camera.position;});
   return scene;
}

var scene01_1 = CreateScene01_1();
//engine.runRenderLoop(function() { scene01_1.render(); });
