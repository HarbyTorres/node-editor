import Vue from 'vue'
import Drawflow from 'drawflow'
import SumNode from '@core/components/nodes/SumNode.vue'
import SubtractNode from '@core/components/nodes/SubtractNode.vue'
import NumNode from '@core/components/nodes/NumNode.vue'
import DivideNode from '@core/components/nodes/DivideNode.vue'
import MultiplyNode from '@core/components/nodes/MultiplyNode.vue'
import AssingNode from '@core/components/nodes/AssingNode.vue'
import IfNode from '@core/components/nodes/IfNode.vue'

let editor
export default function home(body) {
    const drawflow = () => {
        console.log("editor")
        if( body != "error-404" && body != undefined) {
        this.importjs()
        }
        const id = document.getElementById("drawflow");
        editor = new Drawflow(id, Vue, this);
        editor.registerNode('numbervue', NumNode);
        editor.registerNode('sumnode', SumNode);
        editor.registerNode('substract', SubtractNode);
        editor.registerNode('divide', DivideNode);
        editor.registerNode('multiply', MultiplyNode);
        editor.registerNode('assing', AssingNode);
        editor.registerNode('if', IfNode);
        editor.start();

        editor.on('nodeDataChanged', (id)=>{
        let newValue = editor.getNodeFromId(id).data.num
        console.log(newValue)
        let input1value
        let input2value
        if(editor.getNodeFromId(id).outputs.output_1.connections[0]){
            let outputNode = editor.getNodeFromId(id).outputs.output_1.connections[0].node
            if(editor.getNodeFromId(id).outputs.output_1.connections[0].output == "input_1"){
            input1value = newValue
            input2value = this.getDataNode(outputNode, "input2")
            }else{
            input2value = newValue
            input1value = this.getDataNode(outputNode, "input1")
            }
            this.updateData(outputNode, input1value, input2value)
        }
        })
        
        editor.on('connectionCreated', (connection)=> {
            if(editor.getNodeFromId(connection.input_id).class == "assing"){
            let input1value = this.getDataNode(connection.input_id, "input1")
            editor.updateNodeDataFromId(connection.input_id, { num: input1value})
            }else{
            let input1value = this.getDataNode(connection.input_id, "input1")
            let input2value = this.getDataNode(connection.input_id, "input2")
            this.updateData(connection.input_id, input1value, input2value)
            }
        });
    }
    const exportjs = ()=>{
      console.log(editor.export())
    }
    const importjs = ()=>{
      //alert(this.$router.currentRoute.params.body)
      editor.import(this.$router.currentRoute.params.body)
    }

    const updateData = (nodeId, value1, value2)=>{
      switch (editor.getNodeFromId(nodeId).class) {
        case 'add':
          editor.updateNodeDataFromId(nodeId, { num1: value1, num2: value2, num: parseInt(value1) + parseInt(value2)})
          break;
        case 'subt':
          editor.updateNodeDataFromId(nodeId, { num1: value1, num2: value2, num: parseInt(value1) - parseInt(value2)})
          break;
        case 'divide':
          editor.updateNodeDataFromId(nodeId, { num1: value1, num2: value2, num: parseInt(value1) / parseInt(value2)})
          break;
        case 'multiply':
          editor.updateNodeDataFromId(nodeId, { num1: value1, num2: value2, num: parseInt(value1) * parseInt(value2)})
          break;
        };
    }
    const getDataNode=(nodeId, typeinput)=>{
      let inputvalue = null
      if(typeinput == "input1" && editor.getNodeFromId(nodeId).inputs.input_1.connections[0] ){
        let input1id = editor.getNodeFromId(nodeId).inputs.input_1.connections[0].node
        inputvalue = editor.getNodeFromId(input1id).data.num
      }
      if(typeinput == "input2" && editor.getNodeFromId(nodeId).inputs.input_2.connections[0]){
        let input2id = editor.getNodeFromId(nodeId).inputs.input_2.connections[0].node
        inputvalue= editor.getNodeFromId(input2id).data.num
      }
      return inputvalue
    }
    const addNodeToDrawFlow=(name, pos_x, pos_y)=> {

      pos_x = pos_x * ( editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom)) - (editor.precanvas.getBoundingClientRect().x * ( editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom)));
      pos_y = pos_y * ( editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom)) - (editor.precanvas.getBoundingClientRect().y * ( editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom)));

      switch (name) {
        case 'Number':
          editor.addNode('number', 0,  1, pos_x, pos_y, 'number', {"num": ''}, 'numbervue', 'vue');
          break;
        case 'Add':
          editor.addNode('add', 2, 1, pos_x, pos_y, 'add', {}, 'sumnode', 'vue' );
          break;
        case 'Subtract':
          editor.addNode('subt', 2, 1, pos_x, pos_y, 'subt', {}, 'substract', 'vue' );
          break;
        case 'Divide':
          editor.addNode('divide', 2, 1, pos_x, pos_y, 'divide', {}, 'divide', 'vue' );
          break;
        case 'Multiply':
          editor.addNode('multiply', 2, 1, pos_x, pos_y, 'multiply', {}, 'multiply', 'vue' );
          break;
        case 'Assing':
          editor.addNode('assing', 1, 1, pos_x, pos_y, 'assing', {}, 'assing', 'vue' );
          break;
        case 'If':
          editor.addNode('if', 1, 2, pos_x, pos_y, "if", {}, 'if', 'vue' );
      }
    }

    const onDrop = (evt)=> {
        let data = evt.dataTransfer.getData("node");
        addNodeToDrawFlow(data, evt.clientX, evt.clientY);
    }

    const startDrag =(evt)=> {
      evt.dataTransfer.setData("node", evt.target.getAttribute('data-node'));
    }
    return {
        drawflow,
        exportjs,
        importjs,
        addNodeToDrawFlow,
        updateData,
        getDataNode,
        onDrop,
        startDrag
    }
}