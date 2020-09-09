import {Component, OnInit} from '@angular/core';
import {AvatarObject} from '../../projects/avatar-helper/src/lib/avatar-helper.component';
// import {AvatarObject} from 'avatar-helper/lib/avatar-object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AvatarLibrary';
  modelList: Array<AvatarObject>;
  isEditMode = false;

  ngOnInit(): void {
    this.modelList = new Array<AvatarObject>();

    const newAvatar1 = Object.assign(new AvatarObject(), {
      uuid: '',
      name: 'Claudia',
      filePostfix: 'gltf',
      mtlFileName: '',
      textureFileName: '',
      mesh: 'fly',
      skeleton: '',
      model: null,
      mixer: null,
      rotation: {x: 0, y: -0.4, z: 0},
      currentPosition: {x: 20, y: -20, z: 2},
      startPosition: {x: 20, y: -20, z: 2},
      endPosition: {x: 20, y: -20, z: 2},
      randomDirection: false,
      isKeepPosition: true,
      islookAt: true,
      headingVector: {x: 0, y: 0, z: 0},
      animationSpeeds: [
        {name: 'idle', value: 0, passedSeconds: 0},
        {name: 'wave', value: 0, passedSeconds: 10},
        {name: 'fly', value: 1, passedSeconds: 0},
        {name: 'armlift', value: 0, passedSeconds: 0},
        {name: 'shrug', value: 0, passedSeconds: 0},
        {name: 'wave2', value: 0, passedSeconds: 20},
        {name: 'pacing', value: 0, passedSeconds: 30},
        {name: 'talking', value: 0, passedSeconds: 0},
      ],
      scale: 7,
      animations: [],
      currentAnimationName: 'idle',
      clickableOptions: [
        {
          id: 0,
          label: 'Click me!',
          text: 'Hello, my name is Claudia. Please click one of the options above me to know more',
          animationName: 'idle',
          parentId: -1,
          pointAtPosition: null,
          labelColor: '#0000ff',
          labelSelectedColor: '#ff0000'
        },
        {
          id: 1,
          label: 'Auditorium',
          text: 'The auditorium is a place where the user can watch the live and v o d sessions',
          animationName: 'talking',
          parentId: 0,
          pointAtPosition: {x: 3, y: 3, z: 3},
          labelColor: '#0000ff',
          labelSelectedColor: '#ff0000'
        },
        {
          id: 2,
          label: 'Exhibition',
          text: 'The exhibition area is a place where users can visit the exhibitors booth',
          animationName: 'talking',
          parentId: 0,
          pointAtPosition: {x: 2, y: 2, z: 2},
          labelColor: '#0000ff',
          labelSelectedColor: '#ff0000'
        },
        {
          id: 3,
          label: 'Networking lounge',
          text: 'The networking lounge is a place for the users to chat with each other',
          animationName: 'talking',
          parentId: 0,
          pointAtPosition: {x: 1, y: 1, z: 1},
          labelColor: '#0000ff',
          labelSelectedColor: '#ff0000'
        },
      ],
      currentTextId: 0,
      passingSeconds: null,
      lastPassingTime: null,
      isPassingAnimating: false,
      isBoredAnimating: false
    });
    this.modelList.push(newAvatar1);

    const newAvatar2 = Object.assign(new AvatarObject(), {
      uuid: '',
      name: 'Man',
      filePostfix: 'glb',
      mtlFileName: '',
      textureFileName: '',
      mesh: 'mesh_0',
      skeleton: '',
      model: null,
      mixer: null,
      rotation: {x: 0, y: -Math.PI / 2, z: 0},
      currentPosition: {x: 90, y: -20, z: -2},
      startPosition: {x: 90, y: -20, z: -2},
      endPosition: {x: -90, y: -20, z: -2},
      randomDirection: false,
      isKeepPosition: false,
      islookAt: true,
      headingVector: {x: 0.005, y: 0.005, z: 0.005},
      animationSpeeds: [
        {name: 'animation_0', value: 0.04, passedSeconds: 0},
      ],
      scale: 3.5,
      animations: [],
      currentAnimationName: 'animation_0',
      clickableOptions: [],
      currentTextId: 0,
      passingSeconds: 10,
      lastPassingTime: null,
      isPassingAnimating: false,
      isBoredAnimating: false
    });
    this.modelList.push(newAvatar2);

    const newAvatar3 = Object.assign(new AvatarObject(), {
      uuid: '',
      name: 'MilkTruck',
      filePostfix: 'glb',
      mtlFileName: '',
      textureFileName: '',
      mesh: 'mesh_0',
      skeleton: '',
      model: null,
      mixer: null,
      rotation: {x: 0, y: -Math.PI / 2, z: 0},
      currentPosition: {x: 90, y: -20, z: -2},
      startPosition: {x: 90, y: -20, z: -2},
      endPosition: {x: -90, y: -20, z: -2},
      randomDirection: false,
      isKeepPosition: false,
      islookAt: true,
      headingVector: {x: 0.01, y: 0.01, z: 0.01},
      animationSpeeds: [
        {name: '', value: 0.2, passedSeconds: 0},
      ],
      scale: 1,
      animations: [],
      currentAnimationName: '',
      clickableOptions: [],
      currentTextId: 0,
      passingSeconds: 10,
      lastPassingTime: null,
      isPassingAnimating: false,
      isBoredAnimating: false
    });
    this.modelList.push(newAvatar3);

    const newAvatar4 = Object.assign(new AvatarObject(), {
      uuid: '',
      name: 'Balloon',
      filePostfix: 'glb',
      mtlFileName: '',
      textureFileName: '',
      mesh: 'mesh_0',
      skeleton: '',
      model: null,
      mixer: null,
      rotation: {x: 0, y: Math.PI / 2, z: 0},
      currentPosition: {x: 90, y: 0, z: -2},
      startPosition: {x: 90, y: 0, z: -2},
      endPosition: {x: -90, y: 0, z: -2},
      randomDirection: false,
      isKeepPosition: false,
      islookAt: false,
      headingVector: {x: 0.001, y: 0.001, z: 0.001},
      animationSpeeds: [
        {name: '', value: 0.01, passedSeconds: 0},
      ],
      scale: 0.5,
      animations: [],
      currentAnimationName: '',
      clickableOptions: [],
      currentTextId: 0,
      passingSeconds: 10,
      lastPassingTime: null,
      isPassingAnimating: false,
      isBoredAnimating: false
    });
    this.modelList.push(newAvatar4);

  }

  modelListSubmitted(modelList: Array<AvatarObject>) {
  }

}
