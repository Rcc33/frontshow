<template>
  <div class="dynamic-container">
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:scroll">
      <li v-for="(item,index) in items" :key="index">
        <el-card shadow="hover" :name="item.perception_object">
          <div class="change_infor">
            <div class="inner">
              <div class="infor_container">
                <p class="first-infor">event_type: {{item.event_type}}</p>
                <p class="last-infor">timestamp: {{item.timestamp}}</p>
                <p class="last-infor">location: {{item.location}}</p>
                <p class="last-infor">perception_object: {{item.perception_object}}</p>
                <p class="last-infor">payload_data: {{item.payload_data}}</p>
              </div>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "information_dynamic",
  components: {
  },
  data() {
    return {
      items: [{
        event_type: 'event_type',
        timestamp: 'timestamp',
        location: 'location',
        perception_object: 'perception_object',
        payload_data: 'payload_data',
      },
      {
        event_type: 'event_type',
        timestamp: 'timestamp',
        location: 'location',
        perception_object: 'perception_object',
        payload_data: 'payload_data',
      }, {
        event_type: 'event_type',
        timestamp: 'timestamp',
        location: 'location',
        perception_object: 'perception_object',
        payload_data: 'payload_data',
      }, {
        event_type: 'event_type',
        timestamp: 'timestamp',
        location: 'location',
        perception_object: 'perception_object',
        payload_data: 'payload_data',
      }, {
        event_type: 'event_type',
        timestamp: 'timestamp',
        location: 'location',
        perception_object: 'perception_object',
        payload_data: 'payload_data',
      }, {
        event_type: 'event_type',
        timestamp: 'timestamp',
        location: 'location',
        perception_object: 'perception_object',
        payload_data: 'payload_data',
      }]
    }
  },
  mounted() { },
  methods: {
    load() {
    }
  },
}
</script>

<style>
.dynamic-container {
  height: 100%;
}

.infinite-list {
  height: 100%;
  margin-top: 2%;
  padding-left: 30px;
  margin-bottom: 0;
}

.change_infor {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.inner {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: scroll;
  overflow-y: scroll;
}

.inner::-webkit-scrollbar {
  display: none;
}

.infor_container {
  display: inline-block;
  height: 100%;
  margin: 3%;
}

.last-infor {
  margin-top: 2vh;
  margin-bottom: 0;
  white-space: nowrap;
}
</style>

