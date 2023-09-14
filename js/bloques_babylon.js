// Creación de bloques BabylonJS con las cámaras
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

// Creación de bloques BabylonJS con las luces
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
    this.setTooltip("Crea una luz en Babylon.js con el tipo, posición (y direccion) especificados");
    this.setHelpUrl("https://doc.babylonjs.com/features/featuresDeepDive/lights");
    const thisBlock = this;
    dropdown.setValidator(function(option) {
      thisBlock.updateShape_(option);
      return option;
    });
  },
  updateShape_: function(lightType) {
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
    this.setTooltip("Crea una figura en Babylon.js (caja, esfera, cilindro, plano, torus) con las dimensiones y posición especificadas")
    this.setHelpUrl("https://doc.babylonjs.com/features/featuresDeepDive/mesh")
    const thisBlock = this;
    dropdown.setValidator(function(option) {
      thisBlock.updateShape_(option);
      return option;
    });
  },
  updateShape_: function(shapeType) {
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

  return code
};

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

  let code = `${groundName} = BABYLON.MeshBuilder.CreateGround("${groundName}", { width: ${width}, height: ${height} })`
  
  return code

};

// Creación de bloques BabylonJS para la creación de material
Blockly.Blocks['babylon_create_material'] = {
  init: function() {
    const dropdown = new Blockly.FieldDropdown([
      ["estándar", "standard"],
    ]);
    this.appendDummyInput()
        .appendField("Crear material")
        .appendField(dropdown, "MATERIAL_TYPE")
        .appendField("llamado")
        .appendField(new Blockly.FieldVariable("material"), "MATERIAL_NAME")
    this.setColour(230);
    this.setTooltip("Crea un material en Babylon.js del tipo especificado");
    this.setHelpUrl("https://doc.babylonjs.com/features/featuresDeepDive/materials");
  }
};

Blockly.JavaScript['babylon_create_material'] = function (block) {
  const materialType = block.getFieldValue('MATERIAL_TYPE');
  const materialName = block.getField('MATERIAL_NAME').getText();

  let code = ''

  if(materialType === 'standard') {
    code += `${materialName} = new BABYLON.StandardMaterial("${materialName}") \n`
  }

  return code

}

// Creación de bloque BabylonJS para la asignación de material a una figura
Blockly.Blocks['babylon_set_material'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Asignar material")
        .appendField(new Blockly.FieldVariable("material"), "MATERIAL_VARIABLE")
        .appendField("a la figura")
        .appendField(new Blockly.FieldVariable("shape"), "SHAPE_VARIABLE")
    this.setColour(230);
    this.setTooltip("Asigna un material a una figura en Babylon.js");
    this.setHelpUrl("https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction");
  }
};

Blockly.JavaScript['babylon_set_material'] = function (block) {
  const materialName = block.getField('MATERIAL_VARIABLE').getText();
  const shapeName = block.getField('SHAPE_VARIABLE').getText();

  let code = `${shapeName}.material = ${materialName} \n`

  return code

}

// Creación de bloques BabylonJS para la asignación de color a un material
Blockly.Blocks['babylon_set_material_color'] = {
  init: function() {
    const dropdown = new Blockly.FieldDropdown([
      ["difuso", "diffuseColor"],
      ["especular", "specularColor"],
      ["emisivo", "emissiveColor"],
      ["ambiente", "ambientColor"]
    ]);
    this.appendDummyInput()
        .appendField("Al material llamado")
        .appendField(new Blockly.FieldVariable("shape"), "SHAPE_VARIABLE")
        .appendField("asignar reaccion a la luz")
        .appendField(dropdown, "MATERIAL_COLOR")
    this.appendValueInput("COLOR")
        .appendField("con el color:")
    this.setColour(230);
    this.setTooltip("Asigna como el material manejara el color de la figura en Babylon.js");
    this.setHelpUrl("https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction");
  }
};

Blockly.JavaScript['babylon_set_material_color'] = function (block) {
  const shapeName = block.getField('SHAPE_VARIABLE').getText();
  const materialColor = block.getFieldValue('MATERIAL_COLOR');
  const color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_NONE);

  let code = `${shapeName}`

  if (materialColor === 'diffuseColor') {
    code += `.diffuseColor = ${color} \n`
  } else if (materialColor === 'specularColor') {
    code += `.specularColor = ${color} \n`
  } else if (materialColor === 'emissiveColor') {
    code += `.emissiveColor = ${color} \n`
  } else if (materialColor === 'ambientColor') {
    code += `.ambientColor = ${color} \n`
  }
  
  return code

}

// Creación de bloques BabylonJS para la creación de colores con RGB
Blockly.Blocks['color_rgb'] = {
  init: function() {

    const validarNumeroRGB = function(value) {

      const number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number < 0) {
        return 0;
      }

      if (number > 255) {
        return 255;
      }

      return number

    }

    this.appendDummyInput()
        .appendField("Rojo:")
        .appendField(new Blockly.FieldTextInput(0, validarNumeroRGB), "RED")
    this.appendDummyInput()
        .appendField("Verde:")
        .appendField(new Blockly.FieldTextInput(0, validarNumeroRGB), "GREEN")
    this.appendDummyInput()
        .appendField("Azul:")
        .appendField(new Blockly.FieldTextInput(0, validarNumeroRGB), "BLUE")
    this.setInputsInline(true)
    this.setOutput(true, null)
    this.setColour(230)
    this.setTooltip("Crea un color en Babylon.js con los valores RGB especificados")
    this.setHelpUrl("https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction")
  }
};

Blockly.JavaScript['color_rgb'] = function(block) {
  const red = block.getFieldValue('RED') || 0;
  const green = block.getFieldValue('GREEN') || 0;
  const blue = block.getFieldValue('BLUE') || 0;

  const code = `new BABYLON.Color3(${red}, ${green}, ${blue})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Creación de bloques BabylonJS para la creación de colores con selector
Blockly.Blocks['color_picker'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Color:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#FFFFFF"), "COLOR");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("Crea un color en Babylon.js con el color especificado en el selector");
    this.setHelpUrl("https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction");
  }
};

Blockly.JavaScript['color_picker'] = function(block) {
  const color = block.getFieldValue('COLOR') || '#FFFFFF';

  const code = `new BABYLON.Color3.FromHexString("${color}")`;
  return [code, Blockly.JavaScript.ORDER_NONE];
}

// Creación de bloques BabylonJS para la creación de colores con hexadecimales
Blockly.Blocks['color_hex'] = {
  init: function() {

    const validarHexadecimal = function(value) {
    
      const hexadecimalRegex = /^#([0-9a-f]{3}){1,2}$/i;

      if (value.match(hexadecimalRegex)) {
        return hexadecimalRegex[0];
      }

      return '#FFFFFF';
    
    }

    this.appendDummyInput()
        .appendField("Hexadecimal:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("#FFFFFF", validarHexadecimal), "HEXA_CODE");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("Crea un color en Babylon.js con el color especificado en hexadecimal");
    this.setHelpUrl("https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction");
  }
};

Blockly.JavaScript['color_hex'] = function(block) {
  const color = block.getFieldValue('HEXA_CODE') || '#FFFFFF';

  const code = `new BABYLON.Color3.FromHexString("${color}")`;
  return [code, Blockly.JavaScript.ORDER_NONE];
}

// Creación de bloques BabylonJS para la creación de Acciones
Blockly.Blocks['babylon_create_action'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Asignar accion a")
        .appendField(new Blockly.FieldVariable("item"), "VARIABLE_ACTION");
    // this.appendStatementInput("ACTIONS")
    //     .setCheck(null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
  }
};

Blockly.JavaScript['babylon_create_action'] = function(block) {
  const variable = block.getField('VARIABLE_ACTION').getText();
  // const statements_name = Blockly.JavaScript.statementToCode(block, 'ACTIONS');

  let code = ''

  if(variable.actionManager === null || variable.actionManager === undefined) {
    code = `${variable}.actionManager = new BABYLON.ActionManager(scene) \n`
  }

  // code += statements_name

  return code
};

// Creación de bloques BabylonJS para el registro de Acciones
Blockly.Blocks['babylon_register_action'] = {
  init: function() {
    const dropdownTriggers = new Blockly.FieldDropdown([
      ["de click", "BABYLON.ActionManager.OnPickTrigger"],
      ["de doble click", "BABYLON.ActionManager.OnDoublePickTrigger"],
      ["pase sobre", "BABYLON.ActionManager.OnPointerOverTrigger"],
      ["pase fuera", "BABYLON.ActionManager.OnPointerOutTrigger"],
    ]);

    const dropdownActions = new Blockly.FieldDropdown([
      ["Cambiar valor booleano", "BABYLON.SwitchBooleanAction"],
      ["Asignar valor numérico", "BABYLON.SetValueAction"],
      ["Incrementar valor numérico", "BABYLON.IncrementValueAction"],
      ["Ejecutar los siguientes bloques", "BABYLON.ExecuteCodeAction"]
    ]);
    this.setInputsInline(false);
    this.appendDummyInput()
        .appendField("Registrar accion en")
        .appendField(new Blockly.FieldVariable("action"), "ACTION_VARIABLE");
    this.appendDummyInput()
        .appendField("Cuando se")
        .appendField(dropdownTriggers, "TRIGGER")
    this.appendDummyInput()
        .appendField("realizar la accion")
        .appendField(dropdownActions, "ACTION")
    this.appendDummyInput("SHAPE")
        .appendField("en")
        .appendField(new Blockly.FieldVariable("shape"), "SHAPE_VARIABLE")
    this.appendValueInput("PROPERTY")
        .appendField("en la propiedad")
    this.appendValueInput("VALUE")
        .appendField("con el valor")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    const thisBlock = this;
    dropdownActions.setValidator(function(option) {
      thisBlock.updateShape_(option);
      return option;
    });
  },
  updateShape_: function(action) {

    if(action === "BABYLON.ExecuteCodeAction") {

      if (!this.getInput('CODE_BLOCKS')) {
        this.appendStatementInput("CODE_BLOCKS")
            .setCheck(null)
            .appendField("con los siguientes bloques");
      }

      if(this.getInput('SHAPE')) {
        this.removeInput("SHAPE");
      }
      
      if(this.getInput('PROPERTY')) {
        this.removeInput("PROPERTY");
      }

      if(this.getInput('VALUE')) {
        this.removeInput("VALUE");
      }


    } else {

      if (this.getInput('CODE_BLOCKS')) {
        this.removeInput("CODE_BLOCKS");
      }

      if(!this.getField('SHAPE_VARIABLE')) {
        this.appendDummyInput()
            .appendField("en")
            .appendField(new Blockly.FieldVariable("shape"), "SHAPE_VARIABLE")
      }
      
      if(!this.getInput('PROPERTY')) {
        this.appendValueInput("PROPERTY")
            .appendField("en la propiedad")
      }

      if(!this.getInput('VALUE')) {
        this.appendValueInput("VALUE")
            .appendField("con el valor")
      }
      
    }
  }
};

Blockly.JavaScript['babylon_register_action'] = function(block) {
  const action_variable = block.getField('ACTION_VARIABLE').getText();
  const trigger = block.getFieldValue('TRIGGER');
  const action = block.getFieldValue('ACTION');

  const shape = block.getField('SHAPE_VARIABLE') ? block.getField('SHAPE_VARIABLE').getText() : null;
  const property = Blockly.JavaScript.valueToCode(block, 'PROPERTY', Blockly.JavaScript.ORDER_ATOMIC) || '';
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '';
  const code_blocks = Blockly.JavaScript.statementToCode(block, 'CODE_BLOCKS');

  let code = ''

  // Si se eligio la opción de ejecutar los siguientes bloques
  if(shape === null) {

    code = ` ${action_variable}.actionManager.registerAction(
      new ${action}(
        ${trigger},
        function(evt) {
          ${code_blocks}
        }
      )
    ) \n`;

  } else {

    code = ` ${action_variable}.actionManager.registerAction(
      new ${action}(
        ${trigger},
        ${shape},
        ${property},
        ${value}
      )
    ) \n`;

  }

  return code
};

// Creación de bloques BabylonJS para las transformaciones
Blockly.Blocks['babylon_transform'] = {
  init: function() {
    const dropdown = new Blockly.FieldDropdown([
      ["trasladar", "position"],
      ["rotar", "rotation"],
      ["escalar", "scaling"]
    ]);
    this.appendDummyInput()
        .appendField(dropdown, "TRANSFORMATION")
        .appendField("la figura")
        .appendField(new Blockly.FieldVariable("shape"), "SHAPE_VARIABLE")
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("en X")
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("en Y")
    this.appendValueInput("Z")
        .setCheck("Number")
        .appendField("en Z")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Realiza una transformación en Babylon.js a la figura especificada");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['babylon_transform'] = function(block) {
  const transformation = block.getFieldValue('TRANSFORMATION');
  const shape = block.getField('SHAPE_VARIABLE').getText();
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC) || '0';

  let code = `${shape}.${transformation} = new BABYLON.Vector3(${x}, ${y}, ${z}) \n`

  return code
};