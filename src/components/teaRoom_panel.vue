<template>
  <div class="node" id="teaRoom_mountNode" />
</template>

<script>
import G6 from "@antv/g6";
export default {
  name: "teaRoomPanel",
  data() {
    return {
      height: window.innerHeight,
      width: window.innerWidth / 4 * 3,
      panelHeight: window.innerHeight,
      panelWidth: window.innerHeight / 838 * 1083,
      graph: null,
      basicData: {
        nodes: [],
      },
    }
  },
  mounted() {
    this.getData();
    this.initG6();
    this.addNodes();
  },
  methods: {
    initG6() {
      this.graph = new G6.Graph({
        container: "teaRoom_mountNode",
        autoPaint: true,
        width: this.panelWidth,
        height: this.panelHeight,
        defaultNode: {
          type: "rect",
          labelCfg: {
            position: "center",
            style: {
              fontSize: this.panelWidth / 40,
              fill: "red",
            },
          },
          style: {
            stroke: "red",
          },
        },
        modes: ["drag-canvas", "zoom-canvas"]
      });
      this.graph.data(this.basicData);
      this.graph.render();
    },
    addNodes() {
      const that = this;
      const teaRoom_label = {
        id: "teaRoom_label",
        x: this.panelWidth / 100 * 85,
        y: this.panelHeight / 100 * 15,
        type: "ellipse",
        size: [this.panelWidth / 100 * 15, this.panelHeight / 100 * 4],
        label: "茶水间",
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const water = {
        id: "water",
        x: this.panelWidth / 100 * 56.3,
        y: this.panelHeight / 100 * 93,
        size: [this.panelWidth / 100 * 7.5, this.panelHeight / 100 * 7.3],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const coffee = {
        id: "tearoom01_coffeemachine001",
        x: this.panelWidth / 100 * 70.6,
        y: this.panelHeight / 100 * 91.1,
        size: [this.panelWidth / 100 * 9, this.panelHeight / 100 * 11.2],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const window_2 = {
        id: "window_2",
        x: this.panelWidth / 100 * 2,
        y: this.panelHeight / 100 * 46.4,
        size: [this.panelWidth / 100 * 3.5, this.panelHeight / 100 * 33],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const air_conditioner_4 = {
        id: "tearoom01_ac001",
        x: this.panelWidth / 100 * 5,
        y: this.panelHeight / 100 * 79,
        size: [this.panelWidth / 100 * 3.3, this.panelHeight / 100 * 19],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      this.basicData.nodes.push(teaRoom_label);
      this.basicData.nodes.push(water);
      this.basicData.nodes.push(coffee);
      this.basicData.nodes.push(window_2);
      this.basicData.nodes.push(air_conditioner_4);
      this.graph.data(this.basicData);
      this.graph.on("node:click", (ev) => {
        const node_now = ev.item;
        const model_now = node_now.getModel();
        if (node_now.getModel().type == "rect" && node_now.getModel().id.indexOf("space") == -1) {
          if (that.$parent.$parent.$parent.id != node_now.getModel().id) {
            if (that.$parent.$parent.$parent.id != "") {
              const node_last = that.graph.findById(that.$parent.$parent.$parent.id);
              const model_last = node_last.getModel();
              model_last.style = {
                fillOpacity: 0,
                lineWidth: 0
              }
              that.graph.updateItem(node_last, model_last);
              that.graph.refreshItem(node_last);
            }
            model_now.style = {
              fillOpacity: 0,
              lineWidth: 2,
              stroke: "red",
            }
            that.graph.updateItem(node_now, model_now);
            that.graph.refreshItem(node_now);
            that.$parent.$parent.$parent.id = node_now.getModel().id;
          }
        }
      });
      this.graph.render();
    },
    getData() {
      if (this.height / this.width < 838 / 1083) {
        this.panelHeight = this.height;
        this.panelWidth = this.height / 838 * 1083;
      } else {
        this.panelHeight = this.width / 1083 * 838;
        this.panelWidth = this.width;
      }
    },
  }
}
</script>

<style>
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

.node {
  width: 100%;
  height: 100%;
}
</style>
