        import * as THREE from 'three';
        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
        import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

        // Scene setup
        const scene = new THREE.Scene();
        //scene.background = new THREE.Color(0x87CEEB);
        scene.background = new THREE.Color(0x001122);
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.body.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 20, 10);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        scene.add(directionalLight);

// ================================= =============================== TEXTURE LOADER
              
        const textureLoader = new THREE.TextureLoader();
        
        // FLOOR TEXTURE
        const floorTexture = textureLoader.load('https://raw.githubusercontent.com/Essabki/source/main/white-gold-marble-texture.jpg');
        floorTexture.wrapS = THREE.RepeatWrapping;
        floorTexture.wrapT = THREE.RepeatWrapping;
        floorTexture.repeat.set(1,2);

        // WALL TEXTURE
        const wallTexture = textureLoader.load(  'https://raw.githubusercontent.com/Essabki/source/main/white-gold-marble-texture.jpg');
        wallTexture.wrapS = THREE.RepeatWrapping;
        wallTexture.wrapT = THREE.RepeatWrapping;
        wallTexture.repeat.set(1, 1);

        // Materials
        const floorMaterial = new THREE.MeshLambertMaterial({
        map: floorTexture
        });

        const wallMaterial = new THREE.MeshLambertMaterial({
        map: wallTexture
        });

//=============================== =============================== FLOOR
       
        const floorGeometry = new THREE.PlaneGeometry(20, 20);
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        scene.add(floor);
        
//=============================== =============================== WALLS

 // RIGHT WALL

        const rightWallGeometry = new THREE.PlaneGeometry(20, 10);
        const rightWall = new THREE.Mesh(rightWallGeometry, wallMaterial);
        rightWall.rotation.y = Math.PI / 2;
        rightWall.position.set(10, 5, 0);
        //rightWall.castShadow = true;
        //rightWall.receiveShadow = true;
        scene.add(rightWall);

// LEFT WALL DAWN 
       
        const left_Wall_dawnGeometry = new THREE.PlaneGeometry(20, 3);
        const left_Wall_dawn = new THREE.Mesh(left_Wall_dawnGeometry, wallMaterial);
        left_Wall_dawn.rotation.y = Math.PI / 2;
        left_Wall_dawn.position.set(-10, 1.5, 0);
        //left_Wall_dawn.castShadow = true;
        //left_Wall_dawn.receiveShadow = true;
        scene.add(left_Wall_dawn);

// LEFT WALL TOP 
       
        const left_Wall_topGeometry = new THREE.PlaneGeometry(20, 3);
        const left_Wall_top = new THREE.Mesh(left_Wall_topGeometry, wallMaterial);
        left_Wall_top.rotation.y = Math.PI / 2;
        left_Wall_top.position.set(-10, 8.5, 0);
       // left_Wall_top.castShadow = true;
        //left_Wall_top.receiveShadow = true;
        scene.add(left_Wall_top);

// LEFT WALL RIGHT
        
        const left_Wall_rightGeometry = new THREE.PlaneGeometry(7, 4);
        const left_Wall_right = new THREE.Mesh(left_Wall_rightGeometry, wallMaterial);
        left_Wall_right.rotation.y = Math.PI / 2;
        left_Wall_right.position.set(-10, 5, -6.5);
       // left_Wall_right.castShadow = true;
        //left_Wall_right.receiveShadow = true;
        scene.add(left_Wall_right);

// LEFT WALL LEFT
        
        const left_Wall_leftGeometry = new THREE.PlaneGeometry(7, 4);
        const left_Wall_left = new THREE.Mesh(left_Wall_leftGeometry, wallMaterial);
        left_Wall_left.rotation.y = Math.PI / 2;
        left_Wall_left.position.set(-10, 5, 6.5);
       // left_Wall_left.castShadow = true;
        //left_Wall_left.receiveShadow = true;
        scene.add(left_Wall_left);


// BACK WALL
        
        const backWallGeometry = new THREE.PlaneGeometry(20, 10);
        const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
        backWall.position.set(0, 5, -10);
       // backWall.castShadow = true;
        //backWall.receiveShadow = true;
        scene.add(backWall);

//=============================== =============================== WINDOWS
       
// WINDOWS LEFT
        
        const windows_Geometry = new THREE.BoxGeometry(3, 4, 0.01);
        const windows_Material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.4
        });
        const windows = new THREE.Mesh(windows_Geometry, windows_Material);
        windows.position.set(-10.01, 5, 1.5);        
        windows.rotation.y = Math.PI / 2;
        scene.add(windows);
       
// WINDOWS RIGHT
       
        const windows2 = windows.clone();
        scene.add(windows2);
        windows2.position.set(-9.99, 5, -1.5);
       const windowsStartZ = windows.position.z;
       const windows2StartZ = windows2.position.z;


//=============================== =============================== DOORS (Glass)
 
// LEFT DOORS

        const left_door_glassGeometry = new THREE.BoxGeometry(10, 9.9, 0.01);
        const left_door_glassMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.4
        });
        const left_door_glass = new THREE.Mesh(left_door_glassGeometry, left_door_glassMaterial);
        left_door_glass.position.set(-5, 5, 10.01);     
        //left_door.rotation.y = Math.PI / 2;
        scene.add(left_door_glass);


// RIGHT ROORS

        const right_door_glassGeometry = new THREE.BoxGeometry(10, 9.9, 0.01);
        const right_door_glassMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.4
        });
        const right_door_glass = new THREE.Mesh(right_door_glassGeometry, right_door_glassMaterial);
        right_door_glass.position.set(5, 5, 10);     
        scene.add(right_door_glass);


//=============================== =============================== DOORS FRAME
       
// FRAME TOP
        const farme_topGeometry = new THREE.BoxGeometry(20, 0.05, 0.05);
        const farme_top = new THREE.Mesh(farme_topGeometry, floorMaterial);
        farme_top.receiveShadow = true;
        farme_top.position.set(0, 0.03, 10);
        scene.add(farme_top);

       
// FRAME DAWN
       
        const frame_dawn = farme_top.clone();
        frame_dawn.position.set(0, 9.97, 10);
        scene.add(frame_dawn);      

//=============================== =============================== WARDROPE

// TEXTURE (verticale)
       
        const textureLoader_wardrobe = new THREE.TextureLoader();
        const woodTexture = textureLoader_wardrobe.load(
            'https://raw.githubusercontent.com/Essabki/Three.js_wardrobe.II/refs/heads/main/texture/wood/verticale.jpg'
        );

        woodTexture.wrapS = THREE.RepeatWrapping;
        woodTexture.wrapT = THREE.RepeatWrapping;
        woodTexture.repeat.set(1, 1);

// TEXTURE (orizzontale)
       
        const orizzontaletextureLoader = new THREE.TextureLoader();
        const orizzontalewoodTexture = textureLoader.load(
            'https://raw.githubusercontent.com/Essabki/Three.js_wardrobe.II/refs/heads/main/texture/wood/orizzontale.jpg');
        orizzontalewoodTexture.wrapS = THREE.RepeatWrapping;
        orizzontalewoodTexture.wrapT = THREE.RepeatWrapping;
        orizzontalewoodTexture.repeat.set(1, 1);

        
// WARDROBE GROUP

        const wardrobeGroup = new THREE.Group();
        scene.add(wardrobeGroup);

        const wardrope_backMaterial = new THREE.MeshStandardMaterial({
         map: woodTexture
        });

        const wardrope_backGeometry = new THREE.BoxGeometry(16, 26, 0.1);
        const wardrope_back = new THREE.Mesh(
        wardrope_backGeometry,
        wardrope_backMaterial
        );

        wardrope_back.position.set(0, 0, 0);
        wardrobeGroup.add(wardrope_back);

        const wardrope_leftMaterial = new THREE.MeshStandardMaterial({
        map: woodTexture
        });
        const wardrope_leftGeometry = new THREE.BoxGeometry(0.1, 26, 6);
        const wardrope_left = new THREE.Mesh(
        wardrope_leftGeometry,
        wardrope_leftMaterial
        );

        wardrope_left.position.set(7.95, 0, 3);
        wardrobeGroup.add(wardrope_left);

// WARDROBE RIGHT SIDE

        const wardrope_rightGeometry = new THREE.BoxGeometry(0.1, 26, 6);
        const wardrope_right = new THREE.Mesh(
        wardrope_rightGeometry,
        wardrope_leftMaterial
        );

        wardrope_right.position.set(-7.95, 0, 3);
        wardrobeGroup.add(wardrope_right);

// WARDROBE MIDELL SIDE

        const wardrope_midellGeometry = new THREE.BoxGeometry(0.1, 20.2, 6);

        const wardrope_midell = new THREE.Mesh(
        wardrope_midellGeometry,
        wardrope_leftMaterial
        );

        wardrope_midell.position.set(0, 2.9, 3);
        //wardrobeGroup.add(wardrope_midell);

// WARDROBE FLOOR MATERIAL

        const wardrobe_floorMaterial = new THREE.MeshStandardMaterial({
        map: orizzontalewoodTexture
        });

// WARDROBE FLOOR SIDE

        const wardrobe_floorGeometry = new THREE.BoxGeometry(16, 0.1, 6);
        const wardrobe_floor = new THREE.Mesh(
        wardrobe_floorGeometry,
        wardrobe_floorMaterial
        );
        wardrobe_floor.position.set(0, -12.99, 3);
        wardrobeGroup.add(wardrobe_floor);

// WARDROBE ROOF SIDE

        const wardrobe_roofGeometry = new THREE.BoxGeometry(16, 0.1, 6);
        const wardrobe_roof = new THREE.Mesh(
        wardrobe_roofGeometry,
        wardrobe_floorMaterial
        );
        wardrobe_roof.position.set(0, 12.99, 3);
        wardrobeGroup.add(wardrobe_roof);

// WARDROBE DRAWER ROOF

        const wardrobe_drawer_roofGeometry = new THREE.BoxGeometry(15.99, 0.1, 6);
        const wardrobe_drawer_roof = new THREE.Mesh(
        wardrobe_drawer_roofGeometry,
        wardrobe_floorMaterial
        );
        wardrobe_drawer_roof.position.set(0, -7.25, 3);
        wardrobeGroup.add(wardrobe_drawer_roof);

// DRAWER GROUP
        
        const drawerGroup = new THREE.Group();

// ------------------------- FRONT
        const drawer_frontDGeometry = new THREE.BoxGeometry(8, 2.9, 0.01);
        const drawer_frontD = new THREE.Mesh(drawer_frontDGeometry, wardrobe_floorMaterial);
        drawer_frontD.position.set(0, 1.45, 3); 
        drawerGroup.add(drawer_frontD);

// ------------------------- BACK
        const drawer_backDGeometry = new THREE.BoxGeometry(8, 2.5, 0.01);
        const drawer_backD = new THREE.Mesh(drawer_backDGeometry, wardrobe_floorMaterial);
        drawer_backD.position.set(0, 1.25, -3);
        drawerGroup.add(drawer_backD);

// ------------------------- LEFT
        const drawer_leftDGeometry = new THREE.BoxGeometry(6, 2.5, 0.01);
        const drawer_leftD = new THREE.Mesh(drawer_leftDGeometry, wardrobe_floorMaterial);
        drawer_leftD.rotation.y = Math.PI / 2;
        drawer_leftD.position.set(-4, 1.25, 0);
        drawerGroup.add(drawer_leftD);

// ------------------------- RIGHT
        const drawer_rightDGeometry = new THREE.BoxGeometry(6, 2.5, 0.01);
        const drawer_rightD = new THREE.Mesh(drawer_rightDGeometry, wardrobe_floorMaterial);
        drawer_rightD.rotation.y = Math.PI / 2;
        drawer_rightD.position.set(4, 1.25, 0);
        drawerGroup.add(drawer_rightD);

// ------------------------- BASE
        const drawer_baseGeometry = new THREE.BoxGeometry(8, 6, 0.01);
        const drawer_base = new THREE.Mesh(drawer_baseGeometry, wardrobe_floorMaterial);
        drawer_base.rotation.x = Math.PI / 2;
        drawer_base.position.set(0, 0.06, 0);
        drawerGroup.add(drawer_base);


//=============================== =============================== HANDEL WARDROBE

        const handleGeometry = new THREE.BoxGeometry(2, 0.3, 0.1);

// load texture RIGHT HERE (so it's defined before use)
        const handleTexture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/Essabki/Three.js_wardrobe/refs/heads/main/texture/bar.jpg');

        const handleMaterial = new THREE.MeshStandardMaterial({
        map: handleTexture
        });

        const handle = new THREE.Mesh(handleGeometry, handleMaterial);

        handle.position.set(0, 1.45, 3.02);
        drawerGroup.add(handle);

// POSITION WHOLE DRAWER
        drawerGroup.position.set(0, -10.1, 0);
        drawerGroup.scale.set(1.97,1,1)
        drawerGroup.position.z = 3; 
        scene.add(drawerGroup);

// WARDORE DRAWER 2
        const drawerGroup2 = drawerGroup.clone();
        drawerGroup2.position.set(0, -13, 3);
        drawerGroup2.position.z = 3; 
        scene.add(drawerGroup2);

        wardrobeGroup.add(drawerGroup);
        wardrobeGroup.add(drawerGroup2);


// WARDROBE DOORS 

        const wardrobe_doorWidth = 8;
        const wardrobe_doorHeight = 20.2;
        const wardrobe_doorDepth = 0.01;

        const wardrobe_doorMaterial = new THREE.MeshStandardMaterial({
          map: woodTexture
        });


// WAEDROBE LEFT DOOR 

        const wardrobe_leftDoorGroup = new THREE.Group();

        const wardrobe_leftDoor = new THREE.Mesh(
        new THREE.BoxGeometry(wardrobe_doorWidth, wardrobe_doorHeight, wardrobe_doorDepth),
        wardrobe_doorMaterial
        );

// hinge on RIGHT edge
        wardrobe_leftDoor.position.set(-wardrobe_doorWidth / 2, 0, 0);
        wardrobe_leftDoorGroup.add(wardrobe_leftDoor);


// reuse handle
        const wardrobe_leftHandle = new THREE.Mesh(
        handleGeometry,
        handleMaterial
        );

        wardrobe_leftHandle.position.set(-wardrobe_doorWidth / 2 + 0.5, 0, 0);
        wardrobe_leftDoor.add(wardrobe_leftHandle);
        wardrobe_leftHandle.position.set(-3.3,0,0)
        wardrobe_leftHandle.rotation.z =  Math.PI / 2 ;
        wardrobe_leftHandle.scale.set(2,1,1);

        wardrobe_leftDoorGroup.position.set(7.99, 2.90, 6);
        scene.add(wardrobe_leftDoorGroup);

// WARDROBE RIGHT DOOR

        const wardrobe_rightDoorGroup = new THREE.Group();

        const wardrobe_rightDoor = new THREE.Mesh(
        new THREE.BoxGeometry(
        wardrobe_doorWidth,
        wardrobe_doorHeight,
        wardrobe_doorDepth
        ),
         wardrobe_doorMaterial
        );

// hinge on LEFT edge
        wardrobe_rightDoor.position.set(
        wardrobe_doorWidth / 2,
         0,
         0
        );

        wardrobe_rightDoorGroup.add(wardrobe_rightDoor);

// HANDLE
        const wardrobe_rightHandle = new THREE.Mesh(
        handleGeometry,
        handleMaterial
        );

        wardrobe_rightHandle.position.set(3.3, 0, 0);
        wardrobe_rightHandle.rotation.z = Math.PI / 2;
        wardrobe_rightHandle.scale.set(2, 1, 1);

        wardrobe_rightDoor.add(wardrobe_rightHandle);

// POSITION
        wardrobe_rightDoorGroup.position.set(
         -7.99,
         2.90,
         6
        );

// ADD TO WARDROBE
        wardrobeGroup.add(wardrobe_rightDoorGroup);
        wardrobeGroup.add(wardrobe_leftDoorGroup);

        wardrobeGroup.scale.set(0.35,0.32,0.45);
        wardrobeGroup.position.set(-6,4.1,-9.9);

        wardrobe_leftDoor.name = "leftDoor";
        wardrobe_rightDoor.name = "rightDoor";


        
        // bar
        const loader = new THREE.TextureLoader();
        const texture = loader.load('https://raw.githubusercontent.com/Essabki/Three.js_wardrobe/refs/heads/main/texture/bar.jpg');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(3, 1);

        const geometry = new THREE.CylinderGeometry(0.1, 0.1, 15.99, 90);
        const material = new THREE.MeshStandardMaterial({ map: texture });
        const bar = new THREE.Mesh(geometry, material);
        bar.rotation.z = Math.PI / 2;
        bar.position.set(0, 10, 3);
        scene.add(bar);
        wardrobeGroup.add(bar);
        

//================================= =============================== Nightstand
 
        const Nightstand_Group = new THREE.Group();
        scene.add(Nightstand_Group);

// LEFT Nightstand
        const Nightstand_leftGeometry = new THREE.BoxGeometry(0.1, 4.5, 6);
        const Nightstand_left = new THREE.Mesh(
        Nightstand_leftGeometry,
        wardrope_leftMaterial
        );

        Nightstand_left.position.set(-3, 3.75, -3);
        Nightstand_Group.add(Nightstand_left);

// RIGHT Nightstand
        const Nightstand_right = Nightstand_left.clone();
        Nightstand_Group.add(Nightstand_right);
        Nightstand_right.position.set(3, 3.75, -3);

// BACK Nightstand
        const Nightstand_back = Nightstand_left.clone();
        Nightstand_Group.add(Nightstand_back);
        Nightstand_back.position.set(0, 3.75, -6);
        Nightstand_back.rotation.y = Math.PI / 2;

// ROOF Nightstand
        const Nightstand_roofGeometry = new THREE.BoxGeometry(0.1, 6.4, 6.4);
        const Nightstand_roof = new THREE.Mesh(
         Nightstand_roofGeometry,
         wardrope_leftMaterial
        );

        Nightstand_roof.position.set(0, 6, -3);
        Nightstand_Group.add(Nightstand_roof);
        Nightstand_roof.rotation.z = Math.PI / 2;

// ================================= =============================== Nightstand DRAWER I

 // FRONT SIDE (NIGHTSTAND DRAWER I)
        const Nightstand_drawer_Group = new THREE.Group();
        scene.add(Nightstand_drawer_Group);

        const Nightstand_drawer_Geometry = new THREE.BoxGeometry(6, 2, 0.1);
        const Nightstand_drawer_front = new THREE.Mesh(
        Nightstand_drawer_Geometry,
        wardrobe_floorMaterial
        );

        Nightstand_drawer_front.position.set(0, 5, 0);
        Nightstand_drawer_Group.add(Nightstand_drawer_front);

// LEFT SIDE (NIGHTSTAND DRAWER)
        const Nightstand_drawer_leftGeometry = new THREE.BoxGeometry(6, 1.5, 0.1);
        const Nightstand_drawer_left = new THREE.Mesh(
         Nightstand_drawer_leftGeometry,
         wardrobe_floorMaterial
        );

        Nightstand_drawer_left.rotation.y = Math.PI / 2;
        Nightstand_drawer_left.position.set(-2.95, 4.75, -3);
        Nightstand_drawer_Group.add(Nightstand_drawer_left);

//RIGHT SIDE (NIGHTSATND DRAWER)
        const Nightstand_drawer_right = Nightstand_drawer_left.clone();
        Nightstand_drawer_Group.add(Nightstand_drawer_right);
        Nightstand_drawer_right.position.set(2.95, 4.75, -3);


// BACK SIDE (NIGHTSTAND DRAWER)
        const Nightstand_drawer_back = Nightstand_drawer_left.clone();
        Nightstand_drawer_Group.add(Nightstand_drawer_back);
        Nightstand_drawer_back.position.set(0, 4.75, -6 );
        Nightstand_drawer_back.rotation.y = Math.PI;

// BASE SAID (NIGHTSTAND DRAWER)
        const Nightstand_drawer_baseGeometry = new THREE.BoxGeometry(6, 6, 0.1);
        const Nightstand_drawer_base = new THREE.Mesh(
        Nightstand_drawer_baseGeometry,
        wardrobe_floorMaterial
        );

        Nightstand_drawer_base.position.set(0, 4.1, -3);
        Nightstand_drawer_Group.add(Nightstand_drawer_base);
        Nightstand_drawer_base.rotation.x = Math.PI / 2;
        Nightstand_Group.add(Nightstand_drawer_Group);
// ================================= =============================== Nightstand DRAWER II
        const Nightstand_drawer_Group_II = Nightstand_drawer_Group.clone();
        Nightstand_drawer_Group_II.position.set(0, -2, 0);
        scene.add(Nightstand_drawer_Group_II);
        Nightstand_Group.add(Nightstand_drawer_Group_II);


        Nightstand_Group.position.set(0,-0.7,-7.445);
        Nightstand_Group.scale.set(0.5,0.5,0.4);



// ================================= =============================== NIGHTSTAND HANDLE TEXTURE



        const Nightstand_textureLoader =
        new THREE.TextureLoader();

        const Nightstand_handleTexture =
        Nightstand_textureLoader.load(
        'https://raw.githubusercontent.com/Essabki/Three.js_wardrobe/refs/heads/main/texture/bar.jpg'
        );



        Nightstand_handleTexture.wrapS = THREE.RepeatWrapping;
        Nightstand_handleTexture.wrapT = THREE.RepeatWrapping;
        Nightstand_handleTexture.repeat.set(0, 0);
// ================================= =============================== HANDLE GEOMETRY (BOX)

        const Nightstand_handleGeometry =
        new THREE.BoxGeometry(
        1.5,  // width (length of handle)
        0.2,  // height (thin)
        0.1   // depth (thin)
        );

// ================================= =============================== HANDLE MATERIAL (TEXTURE ONLY)

        const Nightstand_handleMaterial =
        new THREE.MeshBasicMaterial({
        map: Nightstand_handleTexture
        });

// ================================= =============================== DRAWER HANDLE I

        const Nightstand_drawerHandle =
         new THREE.Mesh(
        Nightstand_handleGeometry,
        Nightstand_handleMaterial
        );

        Nightstand_drawerHandle.position.set(
         0,
         5,
         0.1
        );

        Nightstand_drawer_Group.add(
        Nightstand_drawerHandle
        );

// ================================= =============================== DRAWER HANDLE II

        const Nightstand_drawerHandle_II =
         Nightstand_drawerHandle.clone();

        Nightstand_drawer_Group_II.add(
          Nightstand_drawerHandle_II
        );

// ================================= =============================== DESK

// DESK TABLE
        const desk_Group = new THREE.Group();
        scene.add(desk_Group);

        
        const desk_tableGeometry = new THREE.BoxGeometry(14, 6, 0.1);
        const desk_table = new THREE.Mesh(
         desk_tableGeometry,
         wardrobe_floorMaterial
        );

        desk_table.rotation.x = Math.PI / 2;
        desk_table.position.set(-3.95, 6.1, -3);
        desk_Group.add(desk_table);

// DESK TABLE STAND




// DRAWER COVER

// LEFT DRAWER COVER
        const cover_Group = new THREE.Group();
        scene.add(cover_Group);

        const desk_leftGeometry = new THREE.BoxGeometry(0.1, 6.5, 6);
        const desk_left = new THREE.Mesh(
        desk_leftGeometry,
        wardrope_leftMaterial
        );

        desk_left.position.set(-3, 2.8, -3);
        desk_Group.add(desk_left);

// RIGHT DRAWER COVER

        const drawer_cover_right = desk_left.clone();
        drawer_cover_right.position.set(3, 2.8, -3);
        desk_Group.add(drawer_cover_right);

// BACK DRAWER COVER

        const drawer_cover_back = desk_left.clone();
        drawer_cover_back.position.set(3, 2.8, -3);
        desk_Group.add(drawer_cover_back);
        drawer_cover_back.position.set(0, 2.8, -6);
        drawer_cover_back.rotation.y = Math.PI / 2;
        

// DESK TABLE STAND
        const desk_stand = drawer_cover_right.clone();
        desk_Group.add(desk_stand);
        desk_stand.position.set(-10.9, 2.8, -3);
 
 
// DRAWER I

        const desk_drawer_Group = new THREE.Group();
        scene.add(desk_drawer_Group);

// FRONT SIDE
        const desk_drawer_Geometry = new THREE.BoxGeometry(6, 2, 0.1);
        const desk_drawer_front = new THREE.Mesh(
        desk_drawer_Geometry,
         wardrobe_floorMaterial
        );
        desk_drawer_front.position.set(0, 5, 0);
        desk_drawer_Group.add(desk_drawer_front);


// LEFT SIDE

        const desk_drawer_leftGeometry = new THREE.BoxGeometry(6, 1.5, 0.1);
        const desk_drawer_left = new THREE.Mesh(
         desk_drawer_leftGeometry,
        wardrobe_floorMaterial
        );

        desk_drawer_left.rotation.y = Math.PI / 2;
        desk_drawer_left.position.set(-2.95, 4.75, -3);
        desk_drawer_Group.add(desk_drawer_left);


// RIGHT SIDE

        const desk_drawer_right = desk_drawer_left.clone();
        desk_drawer_right.position.set(2.95, 4.75, -3);
        desk_drawer_Group.add(desk_drawer_right);

// BACK SIDE

        const desk_drawer_back = desk_drawer_left.clone();
        desk_drawer_back.rotation.y = Math.PI;
        desk_drawer_back.position.set(0, 4.75, -6);
        desk_drawer_Group.add(desk_drawer_back);


// BASE SIDE

        const desk_drawer_baseGeometry = new THREE.BoxGeometry(6, 6, 0.1);
        const desk_drawer_base = new THREE.Mesh(
        desk_drawer_baseGeometry,
        wardrobe_floorMaterial
        );

        desk_drawer_base.rotation.x = Math.PI / 2;
        desk_drawer_base.position.set(0, 4.1, -3);
        desk_drawer_Group.add(desk_drawer_base);


// DRAWER II

        const desk_drawer_Group_II = desk_drawer_Group.clone();
        desk_drawer_Group_II.position.set(0, -2, 0);
        desk_Group.add(desk_drawer_Group_II);


// DRAWER III

        const desk_drawer_Group_III = desk_drawer_Group.clone();
        desk_drawer_Group_III.position.set(0, -4, 0);
        desk_Group.add(desk_drawer_Group_III);


// ADD MAIN DRAWER

        desk_Group.add(desk_drawer_Group);
        desk_Group.position.set(0, 5, 0);



        desk_Group.add(desk_drawer_Group);
        desk_Group.position.set(6.8,0.3,6.99);
        desk_Group.rotation.y = Math.PI / -2; // turn sid
       desk_Group.scale.set(0.55,0.5,0.5)






//================================================== GLB
        
// heel
        const loaderheel = new GLTFLoader();

        loaderheel.load(    
       'https://raw.githubusercontent.com/Essabki/Three.js_wardrobe/main/texture/glb/classic_high_heel_pumps.glb',
     (gltf) => {
    const heel = gltf.scene;
    heel.scale.set(0.3, 0.3, 0.3);
    heel.position.set(1, -5.8, 4);
    heel.rotation.y = Math.PI / 2; // turn sid
    wardrobeGroup.add(heel);
    });

// clothes
        const loaderwood_clothes= new GLTFLoader();
        loaderwood_clothes.load('https://raw.githubusercontent.com/Essabki/Three.js_wardrobe/main/texture/glb/hangers_and_tee-shirt.glb', (gltf) => {
        const wood_clothes = gltf.scene;
        wood_clothes.scale.set(1, 1, 1.6);

        wood_clothes.position.set(0, 8.9, 3);
         wood_clothes.rotation.y = Math.PI / 2; // turn sid
         scene.add(wood_clothes);
         wardrobeGroup.add(wood_clothes);
        });

// bag shoppin'

        const loaderbag_shoppin= new GLTFLoader();

        loaderbag_shoppin.load(
    'https://raw.githubusercontent.com/Essabki/Three.js_wardrobe/main/texture/glb/designer_shopping_bag.glb',
    (gltf) => {
    const bag_shoppin = gltf.scene;
    // Scale skin (adjust as needed)
    bag_shoppin.scale.set(14, 14, 14);

    bag_shoppin.position.set(2, -7.1, 3);
    //bag_shoppin.rotation.y = Math.PI / 2; // turn sid
    scene.add(bag_shoppin);
    wardrobeGroup.add(bag_shoppin);
    });
// bagprada

    const loaderbagprada= new GLTFLoader();

    loaderbagprada.load(
    'https://raw.githubusercontent.com/Essabki/Three.js_wardrobe/main/texture/glb/prada_bag.glb', (gltf) => {
    const bagprada = gltf.scene;
    bagprada.scale.set(30, 30, 30);

    bagprada.position.set(3.9, -7, -3);
    bagprada.rotation.y = Math.PI / 2;
    scene.add(bagprada);
    wardrobeGroup.add(bagprada);
    });


 // hundbag2

    const loaderhundbag2= new GLTFLoader();

    loaderhundbag2.load(
    'https://raw.githubusercontent.com/Essabki/Three.js_wardrobe/main/texture/glb/hundbag2.glb', (gltf) => {
    const hundbag2 = gltf.scene;
    // Scale skin (adjust as needed)
    hundbag2.scale.set(10, 10, 10);
    hundbag2.position.set(-3.5, -5, 3.5);
   // lv__bag.rotation.y = Math.PI / 2; // turn sid
    scene.add(hundbag2);
    wardrobeGroup.add(hundbag2);
    });

 // BED

    const loaderbed = new GLTFLoader();

    loaderbed.load(  'https://raw.githubusercontent.com/Essabki/source/main/bed.glb',
    (gltf) => {
    const bed = gltf.scene;

    // Scale model
    bed.scale.set(1, 1.2, 1);

    // Correct object here
    bed.position.set(5.7, 0, -9.9);

    // Optional rotation
    bed.rotation.y = Math.PI/-2 ;

    scene.add(bed);
    // wardrobeGroup.add(bed);
    });

        const loaderrug = new GLTFLoader();
        loaderrug.load(
        'https://raw.githubusercontent.com/Essabki/source/main/rug_with_tassles.glb',

        (gltf) => {

        const hanger = gltf.scene;

        //hanger.scale.set(0.03,0.025,0.03);
        hanger.scale.set(3,3.5,3.5);
        hanger.position.set(-5,0,2);
        scene.add(hanger);
        console.log("GLB loaded");

},
        (xhr) => {

    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        (error) => {
         console.error("ERROR:", error);
        }

        );



     // office

        const loaderoffice = new GLTFLoader();
        loaderoffice.load(
              "https://raw.githubusercontent.com/Essabki/source/main/mirror_baroque.glb",

        (gltf) => {

        const office = gltf.scene;      
        office.scale.set(7,7,7);
        office.position.set(9.7,6,3.5);
        scene.add(office);
        console.log("GLB loaded");
        office.rotation.y = Math.PI / -2; // turn sid        
},
        (xhr) => {

    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        (error) => {
         console.error("ERROR:", error);
        }

        );

// ================================= =============================== AXES

        scene.add(new THREE.AxesHelper(4));

//=============================== =============================== DOORS LOGIC

// RAYCASTER
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();


        // DOOR STATE
        let leftDoor_glassOpen = false;
        let rightDoor_glassOpen = false;
        let drawer1Open = false;
        let drawer2Open = false;
        let wardrobe_leftDoorOpen = false;
        let wardrobe_rightDoorOpen = false;
        const animationSpeed = 0.08;
        let Nightstand1Open = false;
        let Nightstand2Open = false;
        let windowsOpen1 = false;
        let windowsOpen2 = false;
        let targetOffset = 3; // how far they slide
        let deskDrawer1Open = false;
        let deskDrawer2Open = false;
        let deskDrawer3Open = false;
//=============================== =============================== CLICK HANDLER 

        window.addEventListener("click", onMouseClick);

        function onMouseClick(event) {

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);


// ALL INTERACTIVE OBJECTS IN ONE LIST

const intersects = raycaster.intersectObjects([

    drawerGroup,
    drawerGroup2,

    desk_drawer_Group,
    desk_drawer_Group_II,
    desk_drawer_Group_III,

    left_door_glass,
    right_door_glass,
    wardrobe_leftDoorGroup,
    wardrobe_rightDoorGroup,
    Nightstand_drawer_Group,
    Nightstand_drawer_Group_II,
    windows,
    windows2

], true);
    if (intersects.length === 0) return;

    const obj = intersects[0].object;

    // ==================================================
    // DRAWERS
    // ==================================================
    if (drawerGroup.children.includes(obj)) {
        drawer1Open = !drawer1Open;
        return;
    }

    if (drawerGroup2.children.includes(obj)) {
        drawer2Open = !drawer2Open;
        return;
    }

    // ==================================================
    // GLASS DOORS
    // ==================================================
    if (obj === left_door_glass) {
        leftDoor_glassOpen = !leftDoor_glassOpen;
        return;
    }

    if (obj === right_door_glass) {
        rightDoor_glassOpen = !rightDoor_glassOpen;
        return;
    }

    // ==================================================
    // WARDROBE DOORS (NEW)
    // ==================================================
    // WARDROBE DOORS
    if (obj.name === "leftDoor") {
    wardrobe_leftDoorOpen = !wardrobe_leftDoorOpen;
    return;
    }

    if (obj.name === "rightDoor") {
    wardrobe_rightDoorOpen = !wardrobe_rightDoorOpen;
    return;
    }

    if (Nightstand_drawer_Group.children.includes(obj) || obj.parent === Nightstand_drawer_Group) {
    Nightstand1Open = !Nightstand1Open;
    return;
    }

    if (Nightstand_drawer_Group_II.children.includes(obj) || obj.parent === Nightstand_drawer_Group_II) {
    Nightstand2Open = !Nightstand2Open;
    return;
    }

    if (obj === windows) {
    windowsOpen1 = !windowsOpen1;
    return;
    }

    if (obj === windows2) {
    windowsOpen2 = !windowsOpen2;
    return;
    }

    // DESK DRAWER I
        if (
    desk_drawer_Group.children.includes(obj) ||
    obj.parent === desk_drawer_Group
        ) {

    deskDrawer1Open = !deskDrawer1Open;
    return;
}

// DESK DRAWER II
        if (
    desk_drawer_Group_II.children.includes(obj) ||
    obj.parent === desk_drawer_Group_II
        ) {

    deskDrawer2Open = !deskDrawer2Open;
    return;
        }

// DESK DRAWER III
        if (
    desk_drawer_Group_III.children.includes(obj) ||
    obj.parent === desk_drawer_Group_III
        ) {

    deskDrawer3Open = !deskDrawer3Open;
    return;
        }


}



 // ================================= ===============================🎮 CONTROLS 
        const controls = new OrbitControls(camera, renderer.domElement);

        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        // 🔥 KEY FEATURE (zoom where mouse is)
        controls.zoomToCursor = true;

        // Better navigation
        controls.enablePan = true; 
        controls.screenSpacePanning = true;

        // Limits
        controls.minDistance = 2;
        controls.maxDistance = 50;
        controls.maxPolarAngle = Math.PI / 2;

        // 🎯 Better focus point (not ground center)
        controls.target.set(0, 3, 0);
        controls.update();

        // Initial camera position
        camera.position.set(20, 10, 30);


//================================= =============================== Animation loop
         function animate() {
         requestAnimationFrame(animate);
        controls.update();

    // ==================================================
    // GLASS DOORS (SLIDE)
    // ==================================================
    left_door_glass.position.x = THREE.MathUtils.lerp(
        left_door_glass.position.x,
        leftDoor_glassOpen ? 5 : -5,
        animationSpeed
    );

    right_door_glass.position.x = THREE.MathUtils.lerp(
        right_door_glass.position.x,
        rightDoor_glassOpen ? -5 : 5,
        animationSpeed
    );

    // ==================================================
    // DRAWERS (SLIDE Z)
    // ==================================================
    drawerGroup.position.z = THREE.MathUtils.lerp(
        drawerGroup.position.z,
        drawer1Open ? 8 : 3,
        animationSpeed
    );

    drawerGroup2.position.z = THREE.MathUtils.lerp(
        drawerGroup2.position.z,
        drawer2Open ? 8 : 3,
        animationSpeed
    );

    // ==================================================
    // WARDROBE DOORS (ROTATE)
    // ==================================================
    wardrobe_leftDoorGroup.rotation.y = THREE.MathUtils.lerp(
    wardrobe_leftDoorGroup.rotation.y,
    wardrobe_leftDoorOpen ? Math.PI / 2 : 0,
    animationSpeed
    );

    wardrobe_rightDoorGroup.rotation.y = THREE.MathUtils.lerp(
    wardrobe_rightDoorGroup.rotation.y,
    wardrobe_rightDoorOpen ? -Math.PI / 2 : 0,
    animationSpeed
    );
// ==================================================
// NIGHTSTAND DRAWERS (SLIDE Z)
// ==================================================

    Nightstand_drawer_Group.position.z = THREE.MathUtils.lerp(
         Nightstand_drawer_Group.position.z,
         Nightstand1Open ? 4 : 0,
    animationSpeed
);

    Nightstand_drawer_Group_II.position.z = THREE.MathUtils.lerp(
         Nightstand_drawer_Group_II.position.z,
         Nightstand2Open ? 4 : 0,
    animationSpeed
);
// windows
     const win1Target = windowsStartZ + (windowsOpen1 ? -targetOffset : 0);
     const win2Target = windows2StartZ + (windowsOpen2 ? targetOffset : 0);

    windows.position.z += (win1Target - windows.position.z) * 0.1;
    windows2.position.z += (win2Target - windows2.position.z) * 0.1;
// ==================================================
// DESK DRAWERS
// ==================================================

    desk_drawer_Group.position.z = THREE.MathUtils.lerp(
         desk_drawer_Group.position.z,
        deskDrawer1Open ? 4 : 0,
    animationSpeed
);

    desk_drawer_Group_II.position.z = THREE.MathUtils.lerp(
        desk_drawer_Group_II.position.z,
        deskDrawer2Open ? 4 : 0,
    animationSpeed
);

    desk_drawer_Group_III.position.z = THREE.MathUtils.lerp(
          desk_drawer_Group_III.position.z,
          deskDrawer3Open ? 4 : 0,
    animationSpeed
);
   
   
   
    // ==================================================
    // RENDER
    // ==================================================
    renderer.render(scene, camera);
}

    animate();
        //================================= Handle window resize
             window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });