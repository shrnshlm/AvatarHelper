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
      currentPosition: {x: 20, y: -20, z: 0},
      startPosition: {x: 20, y: -20, z: 0},
      endPosition: {x: 20, y: -20, z: 0},
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
      appearanceFrequency: null,
      lastAppearanceTime: null,
      isAppearanceAnimating: false,
      isBoredAnimating: false,
      isHideUntilAnimation: false,
    });
    this.modelList.push(newAvatar1);

    // const newAvatar2 = Object.assign(new AvatarObject(), {
    //   uuid: '',
    //   name: 'stacy',
    //   filePostfix: 'glb',
    //   mtlFileName: '',
    //   textureFileName: 'stacy.jpg',
    //   mesh: 'mesh_0',
    //   skeleton: '',
    //   model: null,
    //   mixer: null,
    //   rotation: {x: 0, y: 0, z: 0},
    //   currentPosition: {x: -20, y: -20, z: 2},
    //   startPosition: {x: -20, y: -20, z: 2},
    //   endPosition: {x: -20, y: -20, z: 2},
    //   randomDirection: false,
    //   isKeepPosition: true,
    //   islookAt: true,
    //   headingVector: {x: 0, y: 0, z: 0},
    //   animationSpeeds: [
    //     {name: 'pockets', value: 0, passedSeconds: 0},
    //     {name: 'rope', value: 0, passedSeconds: 0},
    //     {name: 'swingdance', value: 0, passedSeconds: 0},
    //     {name: 'jump', value: 0, passedSeconds: 0},
    //     // {name: 'react', value: 0, passedSeconds: 0},
    //     {name: 'shrug', value: 0, passedSeconds: 0},
    //     {name: 'wave', value: 0, passedSeconds: 0},
    //     {name: 'golf', value: 0, passedSeconds: 0},
    //     {name: 'idle', value: 0, passedSeconds: 0},
    //   ],
    //   scale: 10,
    //   animations: [],
    //   currentAnimationName: 'idle',
    //   clickableOptions: [],
    //   currentTextId: 0,
    //   appearanceFrequency: 10,
    //   lastAppearanceTime: null,
    //   isAppearanceAnimating: false,
    //   isBoredAnimating: false,
    //   isHideUntilAnimation: false,
    // });
    // this.modelList.push(newAvatar2);
    //
    // const newAvatar3 = Object.assign(new AvatarObject(), {
    //   uuid: '',
    //   name: 'sophia',
    //   filePostfix: 'fbx',
    //   mtlFileName: '',
    //   textureFileName: '',
    //   mesh: 'mesh_0',
    //   skeleton: '',
    //   model: null,
    //   mixer: null,
    //   rotation: {x: 0, y: 0, z: 0},
    //   currentPosition: {x: -25, y: -20, z: 2},
    //   startPosition: {x: -25, y: -20, z: 2},
    //   endPosition: {x: -25, y: -20, z: 2},
    //   randomDirection: false,
    //   isKeepPosition: true,
    //   islookAt: true,
    //   headingVector: {x: 0, y: 0, z: 0},
    //   animationSpeeds: [
    //     {name: 'Take 001', value: 0, passedSeconds: 0},
    //   ],
    //   scale: 0.1,
    //   animations: [],
    //   currentAnimationName: 'idle',
    //   clickableOptions: [],
    //   currentTextId: 0,
    //   appearanceFrequency: 10,
    //   lastAppearanceTime: null,
    //   isAppearanceAnimating: false,
    //   isBoredAnimating: false,
    //   isHideUntilAnimation: false,
    // });
    // this.modelList.push(newAvatar3);
    //
    // const newAvatar4 = Object.assign(new AvatarObject(), {
    //   uuid: '',
    //   name: 'Man',
    //   filePostfix: 'glb',
    //   mtlFileName: '',
    //   textureFileName: '',
    //   mesh: 'mesh_0',
    //   skeleton: '',
    //   model: null,
    //   mixer: null,
    //   rotation: {x: 0, y: -Math.PI / 2, z: 0},
    //   currentPosition: {x: 90, y: -20, z: 10},
    //   startPosition: {x: 90, y: -20, z: 10},
    //   endPosition: {x: -90, y: -20, z: 10},
    //   randomDirection: false,
    //   isKeepPosition: false,
    //   islookAt: true,
    //   headingVector: {x: 0.005, y: 0.005, z: 0.005},
    //   animationSpeeds: [
    //     {name: 'animation_0', value: 0.03, passedSeconds: 0},
    //   ],
    //   scale: 3.5,
    //   animations: [],
    //   currentAnimationName: 'animation_0',
    //   clickableOptions: [],
    //   currentTextId: 0,
    //   appearanceFrequency: 10,
    //   lastAppearanceTime: null,
    //   isAppearanceAnimating: false,
    //   isBoredAnimating: false,
    //   isHideUntilAnimation: false,
    // });
    // this.modelList.push(newAvatar4);
    //
    // const newAvatar5 = Object.assign(new AvatarObject(), {
    //   uuid: '',
    //   name: 'MilkTruck',
    //   filePostfix: 'glb',
    //   mtlFileName: '',
    //   textureFileName: '',
    //   mesh: 'mesh_0',
    //   skeleton: '',
    //   model: null,
    //   mixer: null,
    //   rotation: {x: 0, y: -Math.PI / 2, z: 0},
    //   currentPosition: {x: 90, y: -20, z: 10},
    //   startPosition: {x: 90, y: -20, z: 10},
    //   endPosition: {x: -90, y: -20, z: 10},
    //   randomDirection: false,
    //   isKeepPosition: false,
    //   islookAt: true,
    //   headingVector: {x: 0.01, y: 0.01, z: 0.01},
    //   animationSpeeds: [
    //     {name: '', value: 0.2, passedSeconds: 0},
    //   ],
    //   scale: 1,
    //   animations: [],
    //   currentAnimationName: '',
    //   clickableOptions: [],
    //   currentTextId: 0,
    //   appearanceFrequency: 10,
    //   lastAppearanceTime: null,
    //   isAppearanceAnimating: false,
    //   isBoredAnimating: false,
    //   isHideUntilAnimation: false,
    // });
    // this.modelList.push(newAvatar5);
    //
    // const newAvatar6 = Object.assign(new AvatarObject(), {
    //   uuid: '',
    //   name: 'Balloon',
    //   filePostfix: 'glb',
    //   mtlFileName: '',
    //   textureFileName: '',
    //   mesh: 'mesh_0',
    //   skeleton: '',
    //   model: null,
    //   mixer: null,
    //   rotation: {x: 0, y: Math.PI / 2, z: 0},
    //   currentPosition: {x: 90, y: 0, z: 7},
    //   startPosition: {x: 90, y: 0, z: 7},
    //   endPosition: {x: -90, y: 0, z: 7},
    //   randomDirection: false,
    //   isKeepPosition: false,
    //   islookAt: false,
    //   headingVector: {x: 0.001, y: 0.001, z: 0.001},
    //   animationSpeeds: [
    //     {name: '', value: 0.01, passedSeconds: 0},
    //   ],
    //   scale: 0.5,
    //   animations: [],
    //   currentAnimationName: '',
    //   clickableOptions: [],
    //   currentTextId: 0,
    //   appearanceFrequency: 10,
    //   lastAppearanceTime: null,
    //   isAppearanceAnimating: false,
    //   isBoredAnimating: false,
    //   isHideUntilAnimation: false,
    // });
    // this.modelList.push(newAvatar6);
    //
    // const newAvatar7 = Object.assign(new AvatarObject(), {
    //   uuid: '',
    //   name: 'Parrot',
    //   filePostfix: 'glb',
    //   mtlFileName: '',
    //   textureFileName: '',
    //   mesh: 'mesh_0',
    //   skeleton: '',
    //   model: null,
    //   mixer: null,
    //   rotation: {x: 0, y: 0, z: 0},
    //   currentPosition: {x: 4, y: -1, z: 0},
    //   startPosition: {x: 4, y: -1, z: 0},
    //   endPosition: {x: -4, y: -1, z: 0},
    //   randomDirection: true,
    //   isKeepPosition: false,
    //   islookAt: true,
    //   headingVector: {x: 0.01, y: 0.01, z: 0.01},
    //   animationSpeeds: [
    //     {name: 'parrot_A_', value: 0.1, passedSeconds: 0},
    //   ],
    //   scale: 0.05,
    //   animations: [],
    //   currentAnimationName: 'parrot_A_',
    //   clickableOptions: [],
    //   currentTextId: 0,
    //   appearanceFrequency: 10,
    //   lastAppearanceTime: null,
    //   isAppearanceAnimating: false,
    //   isBoredAnimating: false,
    //   isHideUntilAnimation: false,
    // });
    // this.modelList.push(newAvatar7);
    //
    // const newAvatar8 = Object.assign(new AvatarObject(), {
    //   uuid: '',
    //   name: 'Soldier',
    //   filePostfix: 'glb',
    //   mtlFileName: '',
    //   textureFileName: '',
    //   mesh: 'vanguard_Mesh',
    //   skeleton: '',
    //   model: null,
    //   mixer: null,
    //   rotation: {x: 0, y: Math.PI / 2, z: 0},
    //   currentPosition: {x: 4, y: -3, z: 0},
    //   startPosition: {x: 4, y: -3, z: 0},
    //   endPosition: {x: -4, y: -3, z: 0},
    //   randomDirection: true,
    //   isKeepPosition: false,
    //   islookAt: true,
    //   headingVector: {x: 0.005, y: 0.005, z: 0.005},
    //   animationSpeeds: [
    //     {name: 'Idle', value: 0, passedSeconds: 0},
    //     {name: 'Run', value: 0.01, passedSeconds: 0},
    //     {name: 'TPose', value: 0, passedSeconds: 0},
    //     {name: 'Walk', value: 0.005, passedSeconds: 0}
    //   ],
    //   scale: 5,
    //   animations: [],
    //   currentAnimationName: 'Walk',
    //   clickableOptions: [],
    //   currentTextId: 0,
    //   appearanceFrequency: 10,
    //   lastAppearanceTime: null,
    //   isAppearanceAnimating: false,
    //   isBoredAnimating: false,
    //   isHideUntilAnimation: false,
    // });
    // this.modelList.push(newAvatar8);
    //
    // const newAvatar9 = Object.assign(new AvatarObject(), {
    //   uuid: '',
    //   name: 'Astronaut',
    //   filePostfix: 'glb',
    //   mtlFileName: '',
    //   textureFileName: '',
    //   mesh: 'vanguard_Mesh',
    //   skeleton: '',
    //   model: null,
    //   mixer: null,
    //   rotation: {x: 0, y: Math.PI / 2, z: 0},
    //   currentPosition: {x: 4, y: -3, z: 0},
    //   startPosition: {x: 4, y: -3, z: 0},
    //   endPosition: {x: -4, y: -3, z: 0},
    //   randomDirection: true,
    //   isKeepPosition: false,
    //   islookAt: true,
    //   headingVector: {x: 0.005, y: 0.005, z: 0.005},
    //   animationSpeeds: [
    //     {name: 'idle', value: 0, passedSeconds: 0},
    //     {name: 'floating', value: 0.01, passedSeconds: 0},
    //     {name: 'wave', value: 0, passedSeconds: 0},
    //     {name: 'moon_walk', value: 0.005, passedSeconds: 0}
    //   ],
    //   scale: 5,
    //   animations: [],
    //   currentAnimationName: 'moon_walk',
    //   clickableOptions: [],
    //   currentTextId: 0,
    //   appearanceFrequency: 0,
    //   lastAppearanceTime: null,
    //   isAppearanceAnimating: false,
    //   isBoredAnimating: false,
    //   isHideUntilAnimation: false,
    // });
    // this.modelList.push(newAvatar9);
    //
    // const newAvatar10 = Object.assign(new AvatarObject(), {
    //   uuid: '',
    //   name: 'Merlin',
    //   filePostfix: 'glb',
    //   mtlFileName: '',
    //   textureFileName: '',
    //   mesh: 'mesh_0',
    //   skeleton: '',
    //   model: null,
    //   mixer: null,
    //   rotation: {x: 0, y: Math.PI * 1.75, z: 0},
    //   currentPosition: {x: 1.6, y: -1.3, z: 2},
    //   startPosition: {x: 1.6, y: -1.3, z: 2},
    //   endPosition: {x: 1.6, y: -1.3, z: 2},
    //   randomDirection: false,
    //   isKeepPosition: true,
    //   islookAt: true,
    //   headingVector: {x: 0, y: 0, z: 0},
    //   animationSpeeds: [
    //     {name: 'Annouce', value: 0, passedSeconds: 10},
    //     {name: 'Confused', value: 0, passedSeconds: 20},
    //     {name: 'Congratulate', value: 0, passedSeconds: 30},
    //     {name: 'Congratulate2', value: 0, passedSeconds: 40},
    //     {name: 'DoMagic2', value: 0, passedSeconds: 50},
    //     {name: 'GestureLeft', value: 0, passedSeconds: 60},
    //     {name: 'GestureRight', value: 0, passedSeconds: 70},
    //     {name: 'GetAttention', value: 0, passedSeconds: 80},
    //     {name: 'Idle3_1', value: 0, passedSeconds: 90},
    //     {name: 'Suggest', value: 0, passedSeconds: 100},
    //     {name: 'Wave', value: 0, passedSeconds: 110},
    //     {name: 'Wave', value: 0, passedSeconds: 110},
    //   ],
    //   scale: 1,
    //   animations: [],
    //   currentAnimationName: 'DoMagic2',
    //   clickableOptions: [],
    //   currentTextId: 0,
    //   appearanceFrequency: 0,
    //   lastAppearanceTime: null,
    //   isAppearanceAnimating: false,
    //   isBoredAnimating: false,
    //   isHideUntilAnimation: false,
    // });
    // this.modelList.push(newAvatar10);
    //
    // const newAvatar12 = Object.assign(new AvatarObject(), {
    //   uuid: '',
    //   name: 'Dinosaur',
    //   filePostfix: 'glb',
    //   mtlFileName: '',
    //   textureFileName: '',
    //   mesh: 'mesh_0',
    //   skeleton: '',
    //   model: null,
    //   mixer: null,
    //   rotation: {x: 0, y: Math.PI * 0.2, z: 0},
    //   currentPosition: {x: -20, y: 0, z: 0},
    //   startPosition: {x: -20, y: 0, z: 0},
    //   endPosition: {x: 20, y: 0, z: 0},
    //   randomDirection: false,
    //   isKeepPosition: true,
    //   islookAt: true,
    //   headingVector: {x: 0, y: 0, z: 0},
    //   animationSpeeds: [
    //     {name: 'run', value: 0.5, passedSeconds: 10},
    //     {name: 'bite', value: 0.2, passedSeconds: 20},
    //     {name: 'roar', value: 0.2, passedSeconds: 30},
    //     {name: 'attack_tail', value: 0.2, passedSeconds: 40},
    //     {name: 'idle', value: 0.2, passedSeconds: 50},
    //   ],
    //   scale: 2,
    //   animations: [],
    //   currentAnimationName: 'roar',
    //   clickableOptions: [],
    //   currentTextId: 0,
    //   appearanceFrequency: 0,
    //   lastAppearanceTime: null,
    //   isAppearanceAnimating: false,
    //   isBoredAnimating: false,
    //   isHideUntilAnimation: false,
    // });
    // this.modelList.push(newAvatar12);
    //
    // const newAvatar13 = Object.assign(new AvatarObject(), {
    //   uuid: '',
    //   name: 'Airplane',
    //   filePostfix: 'glb',
    //   mtlFileName: '',
    //   textureFileName: '',
    //   mesh: 'mesh_0',
    //   skeleton: '',
    //   model: null,
    //   mixer: null,
    //   rotation: {x: 0, y: 0, z: 0},
    //   currentPosition: {x: 0, y: 0, z: 0},
    //   startPosition: {x: 0, y: 0, z: 0},
    //   endPosition: {x: 0, y: 0, z: 0},
    //   randomDirection: false,
    //   isKeepPosition: true,
    //   islookAt: true,
    //   headingVector: {x: 0.005, y: 0.005, z: 0.005},
    //   animationSpeeds: [
    //     {name: 'idle', value: 0.005, passedSeconds: 0},
    //     {name: 'flight_path_1', value: 0.005, passedSeconds: 0},
    //     {name: 'flight_path_2', value: 0.005, passedSeconds: 0},
    //     {name: 'flight_path_3', value: 0.005, passedSeconds: 0},
    //   ],
    //   scale: 20,
    //   animations: [],
    //   currentAnimationName: 'flight_path_2',
    //   clickableOptions: [],
    //   currentTextId: 0,
    //   appearanceFrequency: 10,
    //   appearanceMaxDuration: 10,
    //   lastAppearanceTime: null,
    //   isAppearanceAnimating: false,
    //   isBoredAnimating: false,
    //   isHideUntilAnimation: true,
    // });
    // this.modelList.push(newAvatar13);

  }

  modelListSubmitted(modelList: Array<AvatarObject>) {
  }

}
