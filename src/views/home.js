import Vue from 'vue'
import Drawflow from 'drawflow'
import SumNode from '@core/components/nodes/SumNode.vue'
import SubtractNode from '@core/components/nodes/SubtractNode.vue'
import NumNode from '@core/components/nodes/NumNode.vue'
import DivideNode from '@core/components/nodes/DivideNode.vue'
import MultiplyNode from '@core/components/nodes/MultiplyNode.vue'
import AssingNode from '@core/components/nodes/AssingNode.vue'
import IfNode from '@core/components/nodes/IfNode.vue'

export default function Drawflows(editor){

    const registerNodes = () =>{ 
        editor.registerNode('numbervue', NumNode);
        editor.registerNode('sumnode', SumNode);
        editor.registerNode('substract', SubtractNode);
        editor.registerNode('divide', DivideNode);
        editor.registerNode('multiply', MultiplyNode);
        editor.registerNode('assing', AssingNode);
        editor.registerNode('if', IfNode);
        editor.start();
    }

    return {
        registerNodes
    }
}