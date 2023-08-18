// Creación de bloques BabylonJS con las cámaras disponibles
Blockly.Blocks['babylon_create_camera'] = {
  init: function() {
    const dropdown = new Blockly.FieldDropdown([
      ["Rotativa", "arcrotate"],
      ["Universal", "free"]
    ]);
    this.appendDummyInput()
        .appendField("Crear cámara")
        .appendField(dropdown, "CAMERA_TYPE")
        .appendField("llamada")
        .appendField(new Blockly.FieldVariable("camera"), "CAMERA_NAME")
    this.appendValueInput("POSITION_X")
      .setCheck("Number")
      .appendField("Posición X");
    this.appendValueInput("POSITION_Y")
      .setCheck("Number")
      .appendField("Posición Y");
    this.appendValueInput("POSITION_Z")
      .setCheck("Number")
      .appendField("Posición Z");
    this.setColour(230);
    this.setTooltip("Crea una cámara en Babylon.js del tipo especificado con la posición especificada");
    this.setHelpUrl("https://doc.babylonjs.com/features/featuresDeepDive/cameras");
    const thisBlock = this;
    dropdown.setValidator(function(option) {
      thisBlock.updateShape_(option);
      return option;
    });
  },
  updateShape_: function(cameraType) {
    debugger
    if (cameraType === 'arcrotate') {
      if (!this.getInput('ALPHA')) {
        this.appendValueInput("ALPHA")
          .setCheck("Number")
          .appendField("Alpha");
        this.appendValueInput("BETA")
          .setCheck("Number")
          .appendField("Beta");
        this.appendValueInput("RADIUS")
          .setCheck("Number")
          .appendField("Radius");
      }
    } else {
      if (this.getInput('ALPHA')) {
        this.removeInput("ALPHA");
        this.removeInput("BETA");
        this.removeInput("RADIUS");
      }
    }
  }
};

Blockly.JavaScript['babylon_create_camera'] = function (block) {
  const cameraType = block.getFieldValue('CAMERA_TYPE');
  const cameraName = block.getField('CAMERA_NAME').getText();
  const positionX = Blockly.JavaScript.valueToCode(block, 'POSITION_X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const positionY = Blockly.JavaScript.valueToCode(block, 'POSITION_Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const positionZ = Blockly.JavaScript.valueToCode(block, 'POSITION_Z', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const alpha = Blockly.JavaScript.valueToCode(block, 'ALPHA', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const beta = Blockly.JavaScript.valueToCode(block, 'BETA', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const radius = Blockly.JavaScript.valueToCode(block, 'RADIUS', Blockly.JavaScript.ORDER_ATOMIC) || '0';

  // let code = '';
  // if (cameraType === 'arcrotate') {
  //   code += `createArcRotateCamera(${positionX}, ${positionY}, ${positionZ}, canvas, BABYLON) \n`;
  // } else if (cameraType === 'free') {
  //   code += `createFreeCamera(${positionX}, ${positionY}, ${positionZ}, canvas, BABYLON) \n`;
  // }

  let code = '';
  if (cameraType === 'arcrotate') {
    code += `${cameraName} = new BABYLON.ArcRotateCamera("arcRotateCamera", ${alpha}, ${beta}, ${radius}, new BABYLON.Vector3(${positionX}, ${positionY}, ${positionZ}));
    ${cameraName}.attachControl(canvas, true) \n`
  } else if (cameraType === 'free') {
    code += `${cameraName} = new BABYLON.FreeCamera("freeCamera", new BABYLON.Vector3(${positionX}, ${positionY}, ${positionZ}));
    ${cameraName}.attachControl(true) \n`
  }

  return code

};

// function createArcRotateCamera(positionX, positionY, positionZ, canvas, BABYLON) {
//   let camera = new BABYLON.ArcRotateCamera("arcRotateCamera", 0, 0, 10, new BABYLON.Vector3(positionX, positionY, positionZ));
//   camera.attachControl(canvas, true)
//   return camera;
// }

// function createFreeCamera(positionX, positionY, positionZ, canvas, BABYLON) {
//   let camera = new BABYLON.FreeCamera("freeCamera", new BABYLON.Vector3(positionX, positionY, positionZ));
//   camera.attachControl(true)
//   return camera;
// }

// Creación de bloques BabylonJS con las luces disponibles
Blockly.Blocks['babylon_create_light'] = {
  init: function() {
    const dropdown = new Blockly.FieldDropdown([
      ["hemisférica", "hemispheric"],
      ["direccional", "directional"],
      ["puntual", "point"],
      ["de punto", "spot"]
    ]);
    this.appendDummyInput()
        .appendField("Crear luz")
        .appendField(dropdown, "LIGHT_TYPE")
        .appendField("llamada")
        .appendField(new Blockly.FieldVariable("light"), "LIGHT_NAME")
    this.appendValueInput("POSITION_X")
      .setCheck("Number")
      .appendField("Posición X");
    this.appendValueInput("POSITION_Y")
      .setCheck("Number")
      .appendField("Posición Y");
    this.appendValueInput("POSITION_Z")
      .setCheck("Number")
      .appendField("Posición Z");
    this.setColour(230);
    this.setTooltip("Crea una luz en Babylon.js con el tipo y posición especificados");
    this.setHelpUrl("https://doc.babylonjs.com/features/featuresDeepDive/lights");
    const thisBlock = this;
    dropdown.setValidator(function(option) {
      thisBlock.updateShape_(option);
      return option;
    });
  },
  updateShape_: function(lightType) {
    debugger
    if (lightType === 'spot') {
      if (!this.getInput('DIRECTION_X')) {
        this.appendValueInput("DIRECTION_X")
          .setCheck("Number")
          .appendField("Dirección X");
        this.appendValueInput("DIRECTION_Y")
          .setCheck("Number")
          .appendField("Dirección Y");
        this.appendValueInput("DIRECTION_Z")
          .setCheck("Number")
          .appendField("Dirección Z");
        this.appendValueInput("ANGLE")
          .setCheck("Number")
          .appendField("Angulo");
        this.appendValueInput("EXPONENT")
          .setCheck("Number")
          .appendField("Exponente");
      }
    } else {
      if (this.getInput('DIRECTION_X')) {
        this.removeInput("DIRECTION_X");
        this.removeInput("DIRECTION_Y");
        this.removeInput("DIRECTION_Z");
        this.removeInput("ANGLE");
        this.removeInput("EXPONENT");
      }
    }
  }
};

Blockly.JavaScript['babylon_create_light'] = function (block) {
  const lightType = block.getFieldValue('LIGHT_TYPE');
  const lightName = block.getField('LIGHT_NAME').getText();
  const positionX = Blockly.JavaScript.valueToCode(block, 'POSITION_X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const positionY = Blockly.JavaScript.valueToCode(block, 'POSITION_Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const positionZ = Blockly.JavaScript.valueToCode(block, 'POSITION_Z', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const directionX = Blockly.JavaScript.valueToCode(block, 'DIRECTORION_X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const directionY = Blockly.JavaScript.valueToCode(block, 'DIRECTORION_Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const directionZ = Blockly.JavaScript.valueToCode(block, 'DIRECTORION_Z', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const exponent = Blockly.JavaScript.valueToCode(block, 'EXPONENT', Blockly.JavaScript.ORDER_ATOMIC) || '0';

  // let code = '';
  // if (lightType === 'directional') {
  //   code += `createDirectionalLight(${positionX}, ${positionY}, ${positionZ}) \n`;
  // } else if (lightType === 'point') {
  //   code += `createPointLight(${positionX}, ${positionY}, ${positionZ}) \n`;
  // } else if (lightType === 'spot') {
  //   code += `createSpotLight(${positionX}, ${positionY}, ${positionZ}) \n`;
  // }

  let code = '';
  if (lightType === 'directional') {
    code += `${lightName} = new BABYLON.DirectionalLight("directionalLight", new BABYLON.Vector3(${positionX}, ${positionY}, ${positionZ})); \n`;
  } else if (lightType === 'point') {
    code += `${lightName} = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(${positionX}, ${positionY}, ${positionZ})); \n`;
  } else if (lightType === 'spot') {
    code += `${lightName} = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(${positionX}, ${positionY}, ${positionZ}), new BABYLON.Vector3(${directionX}, ${directionY}, ${directionZ}), ${angle}, ${exponent}); \n`;
  } else if (lightType === 'hemispheric') {
    code += `${lightName} = new BABYLON.HemisphericLight("hemisphericLight", new BABYLON.Vector3(${positionX}, ${positionY}, ${positionZ})); \n`;
  }

  return code

};

// function createDirectionalLight(positionX, positionY, positionZ) {
//   let light = new BABYLON.DirectionalLight("directionalLight", new BABYLON.Vector3(positionX, positionY, positionZ));
//   return light;
// }

// function createPointLight(positionX, positionY, positionZ) {
//   let light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(positionX, positionY, positionZ));
//   return light;
// }

// function createSpotLight(positionX, positionY, positionZ) {
//   let light = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(positionX, positionY, positionZ), new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2);
//   return light;
// }

// Creación de bloques BabylonJS para la creación de figuras 3D
Blockly.Blocks['babylon_create_shape'] = {
  init: function() {
    const dropdown = new Blockly.FieldDropdown([
      ["caja", "box"],
      ["esfera", "sphere"],
      ["cilindro", "cylinder"],
      ["plano", "plane"],
      ["torus", "torus"]
    ]);
    this.appendDummyInput()
        .appendField("Crear")
        .appendField(dropdown, "SHAPE")
        .appendField("llamada")
        .appendField(new Blockly.FieldVariable("shape"), "SHAPE_VARIABLE")
        .appendField("con las siguientes propiedades:");
        this.appendValueInput("WIDTH")
            .setCheck("Number")
            .appendField("Anchura");
        this.appendValueInput("HEIGHT")
            .setCheck("Number")
            .appendField("Altura");
        this.appendValueInput("DEPTH")
            .setCheck("Number")
            .appendField("profundidad");
        // Las propiedades dependen de la figura seleccionada y se llenara en el updateShape_
    this.setColour(230)
    this.setTooltip("Crea una figura en Babylon.js (caja, esfera o cilindro) con las dimensiones y posición especificadas")
    this.setHelpUrl("https://doc.babylonjs.com/features/featuresDeepDive/mesh")
    const thisBlock = this;
    dropdown.setValidator(function(option) {
      thisBlock.updateShape_(option);
      return option;
    });
  },
  updateShape_: function(shapeType) {
    debugger
    this.removeLastShape_();
    switch (shapeType) {
      case 'box':
        this.appendValueInput("WIDTH")
            .setCheck("Number")
            .appendField("Anchura");
        this.appendValueInput("HEIGHT")
            .setCheck("Number")
            .appendField("Altura");
        this.appendValueInput("DEPTH")
            .setCheck("Number")
            .appendField("profundidad");
      break;
      case 'sphere':
        this.appendValueInput("DIAMETER_X")
            .setCheck("Number")
            .appendField("Diámetro X");
        this.appendValueInput("DIAMETER_Y")
            .setCheck("Number")
            .appendField("Diámetro Y");
        this.appendValueInput("DIAMETER_Z")
            .setCheck("Number")
            .appendField("Diámetro Z");
        this.appendValueInput("ARC")
            .setCheck("Number")
            .appendField("Arco");
        this.appendValueInput("slice")
            .setCheck("Number")
            .appendField("Rebanada");
      break;
      case 'cylinder':
        this.appendValueInput("HEIGHT")
            .setCheck("Number")
            .appendField("Altura");
        this.appendValueInput("DIAMETER_TOP")
            .setCheck("Number")
            .appendField("Diámetro superior");
        this.appendValueInput("DIAMETER_BOTTOM")
            .setCheck("Number")
            .appendField("Diámetro inferior");
      break;
      case 'plane':
        this.appendValueInput("WIDTH")
            .setCheck("Number")
            .appendField("Anchura");
        this.appendValueInput("HEIGHT")
            .setCheck("Number")
            .appendField("Altura");
      break;
      case 'torus':
        this.appendValueInput("DIAMETER")
            .setCheck("Number")
            .appendField("Diámetro");
        this.appendValueInput("THICKNESS")
            .setCheck("Number")
            .appendField("Grosor");
      break;
    }
  },
  removeLastShape_: function() {
    if(this.getInput("WIDTH")) {
      this.removeInput("WIDTH");
    }

    if(this.getInput("HEIGHT")) {
      this.removeInput("HEIGHT");
    }

    if(this.getInput("DEPTH")) {
      this.removeInput("DEPTH");
    }

    if(this.getInput("DIAMETER_X")) {
      this.removeInput("DIAMETER_X");
    }

    if(this.getInput("DIAMETER_Y")) {
      this.removeInput("DIAMETER_Y");
    }

    if(this.getInput("DIAMETER_Z")) {
      this.removeInput("DIAMETER_Z");
    }

    if(this.getInput("ARC")) {
      this.removeInput("ARC");
    }

    if(this.getInput("SLICE")) {
      this.removeInput("SLICE");
    }

    if(this.getInput("HEIGHT")) {
      this.removeInput("HEIGHT");
    }

    if(this.getInput("DIAMETER_TOP")) {
      this.removeInput("DIAMETER_TOP");
    }

    if(this.getInput("DIAMETER_BOTTOM")) {
      this.removeInput("DIAMETER_BOTTOM");
    }

  }
};

Blockly.JavaScript['babylon_create_shape'] = function (block) {
  const shapeType = block.getFieldValue('SHAPE');
  const shapeName = block.getField('SHAPE_VARIABLE').getText();

  let code = ""
  let width, height, depth, diameterX, diameterY, diameterZ, arc, slice, diameterTop, diameterBottom, thickness;

  switch (shapeType) {
    case 'box':
      width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || '1';
      height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || '1';
      depth = Blockly.JavaScript.valueToCode(block, 'DEPTH', Blockly.JavaScript.ORDER_ATOMIC) || '1';
      code = `${shapeName} = BABYLON.MeshBuilder.CreateBox("${shapeName}", { width: ${width}, height: ${height}, depth: ${depth} })`;
    break;
    case 'sphere':
      diameterX = Blockly.JavaScript.valueToCode(block, 'DIAMETER_X', Blockly.JavaScript.ORDER_ATOMIC) || '1';
      diameterY = Blockly.JavaScript.valueToCode(block, 'DIAMETER_Y', Blockly.JavaScript.ORDER_ATOMIC) || '1';
      diameterZ = Blockly.JavaScript.valueToCode(block, 'DIAMETER_Z', Blockly.JavaScript.ORDER_ATOMIC) || '1';
      arc = Blockly.JavaScript.valueToCode(block, 'ARC', Blockly.JavaScript.ORDER_ATOMIC) || '1';
      slice = Blockly.JavaScript.valueToCode(block, 'SLICE', Blockly.JavaScript.ORDER_ATOMIC) || '1';
      code = `${shapeName} = BABYLON.MeshBuilder.CreateSphere("${shapeName}", { diameterX: ${diameterX}, diameterY: ${diameterY}, diameterZ: ${diameterZ}, arc: ${arc}, slice: ${slice} })`;
    break;
    case 'cylinder':
      height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || '1';
      diameterTop = Blockly.JavaScript.valueToCode(block, 'DIAMETER_TOP', Blockly.JavaScript.ORDER_ATOMIC) || '1';
      diameterBottom = Blockly.JavaScript.valueToCode(block, 'DIAMETER_BOTTOM', Blockly.JavaScript.ORDER_ATOMIC) || '1';
      code = `${shapeName} = BABYLON.MeshBuilder.CreateCylinder("${shapeName}", { height: ${height}, diameterTop: ${diameterTop}, diameterBottom: ${diameterBottom} })`;
    break;
    case 'plane':
      width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || '1';
      height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || '1';
      code = `${shapeName} = BABYLON.MeshBuilder.CreatePlane("${shapeName}", { width: ${width}, height: ${height} })`;
    break;
    case 'torus':
      diameter = Blockly.JavaScript.valueToCode(block, 'DIAMETER', Blockly.JavaScript.ORDER_ATOMIC) || '1';
      thickness = Blockly.JavaScript.valueToCode(block, 'THICKNESS', Blockly.JavaScript.ORDER_ATOMIC) || '1';
      code = `${shapeName} = BABYLON.MeshBuilder.CreateTorus("${shapeName}", { diameter: ${diameter}, thickness: ${thickness} })`;
    break;
  }
  
  // let code = '';
  // if (shapeType === 'box') {
  //   code += `createBox(${width}, ${height}, ${depth}, ${positionX}, ${positionY}, ${positionZ}) \n`;
  // } else if (shapeType === 'sphere') {
  //   code += `createSphere(${width}, ${positionX}, ${positionY}, ${positionZ}) \n`;
  // } else if (shapeType === 'cylinder') {
  //   code += `createCylinder(${width}, ${height}, ${positionX}, ${positionY}, ${positionZ}) \n`;
  // }

  return code
};

// function createBox(width, height, depth, positionX, positionY, positionZ) {
//   let box = BABYLON.MeshBuilder.CreateBox("box", { width: width, height: height, depth: depth });
//   box.position.x = positionX;
//   box.position.y = positionY;
//   box.position.z = positionZ;
//   return box;
// }

// function createSphere(radius, positionX, positionY, positionZ) {
//   let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: radius });
//   sphere.position.x = positionX;
//   sphere.position.y = positionY;
//   sphere.position.z = positionZ;
//   return sphere;
// }

// function createCylinder(diameter, height, positionX, positionY, positionZ) {
//   let cylinder = BABYLON.MeshBuilder.CreateCylinder("cylinder", { height: height, diameterTop: diameter, diameterBottom: diameter });
//   cylinder.position.x = positionX;
//   cylinder.position.y = positionY;
//   cylinder.position.z = positionZ;
//   return cylinder;
// }

// Creación de bloques de BabylonJS para la creación de suelo
Blockly.Blocks['babylon_create_ground'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Crear suelo")
        .appendField("llamado")
        .appendField(new Blockly.FieldVariable("ground"), "GROUND_NAME")
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField("Anchura");
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField("Altura");
    this.setColour(230);
    this.setTooltip("Crea un suelo en Babylon.js con el ancho, profundidad y posición especificados");
    this.setHelpUrl("https://doc.babylonjs.com/features/featuresDeepDive/mesh");
  }
};

Blockly.JavaScript['babylon_create_ground'] = function (block) {
  const groundName = block.getField('GROUND_NAME').getText();
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || '1';
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || '1';

  let code = `${groundName} = BABYLON.MeshBuilder.CreateGround("${groundName}", { width: ${width}, height: ${height} })}`
  
  return code

};

// function createGround(width, depth, positionX, positionY, positionZ) {
//   let ground = BABYLON.MeshBuilder.CreateGround("ground", { width: width, height: depth });
//   ground.position.x = positionX;
//   ground.position.y = positionY;
//   ground.position.z = positionZ;
//   return ground;
// }