import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ar-view',
  templateUrl: './ar-view.component.html',
  styleUrls: ['./ar-view.component.css']
})
export class ArViewComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Este código se ejecuta cuando el contenedor `div` está listo
    const container = document.getElementById('ar-container');
    if (container) {
      container.innerHTML = `
        <a-scene
          mindar-image="imageTargetSrc: /aframe/examples/assets/targets.mind"
          color-space="sRGB"
          renderer="colorManagement: true, physicallyCorrectLights"
          vr-mode-ui="enabled: false"
          device-orientation-permission-ui="enabled: false">
          
          <a-assets>
            <a-asset-item id="avatarModel" src="/aframe/examples/image-tracking/nft/TextMuralDGC.glb"></a-asset-item>
          </a-assets>
          
          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
          
          <a-entity mindar-image-target="targetIndex: 0">
            <a-gltf-model
              rotation="0 0 0"
              position="-0.5 -0.6 0.1"
              scale="0.5 0.5 0.5"
              src="#avatarModel"
              animation-mixer>
            </a-gltf-model>
          </a-entity>
        </a-scene>
      `;
    }
  }
}