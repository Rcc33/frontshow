<template>
  <div class="information-outer">
    <el-col>
      <el-row class="Device_row">
        <el-card shadow="hover" name="MeetingRoom_one">
          <div class="Specific_Device_container">
            <p class="name">设备信息</p>
            <div class="information-inner">
              <div class="device" v-if="this.id != ''">
                <p class="first-infor">id: {{id}}</p>
                <p class="infor">type: {{type}}</p>
                <p class="infor">Properties: {{Properties}}</p>
                <p class="infor">State: {{State}}</p>
              </div>
            </div>
          </div>
        </el-card>
      </el-row>
      <el-row class="room_row">
        <el-card shadow="hover" name="MeetingRoom_two">
          <div class="Specific_MeetingRoom_one_container">
            <p class="specific-name">{{room_name}}</p>
            <div class="information-inner">
              <div
                class="device"
                v-if="room_name.indexOf('会议室') != -1 || room_name.indexOf('办公室') != -1"
              >
                <p class="first-infor">温度：{{temperature}}</p>
                <p class="specific-Room">人数：{{count}}</p>
                <p class="specific-Room">门窗状态：{{door}}</p>
              </div>
              <div
                class="device"
                v-if="room_name.indexOf('茶水间') != -1 || room_name.indexOf('走廊') != -1"
              >
                <p class="first-infor">温度：{{temperature}}</p>
                <p class="specific-Room">门窗状态：{{door}}</p>
              </div>
            </div>
          </div>
        </el-card>
      </el-row>
    </el-col>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "information_first",
  components: {},
  props: ['id'],
  data() {
    return {
      room_name: "",
      temperature: "",
      count: "",
      door: "",
      type: "",
      Properties: "",
      State: ""
    }
  },
  created() {
    this.showInfo();
  },
  mounted() {
    this.showInfo();
  },
  watch: {
    id: function (newVal, oldVal) {
      axios.post('api/structure/device/query', newVal,
        {
          headers: {
            'Content-Type': 'application/text'
          }
        }).then(res => {
          console.log(res.data);
          this.type = res.data.type;
          this.Properties = res.data.property;
          this.State = res.data.state;
        }).catch(err => {
          console.log(err)
        })
    },
  },
  methods: {
    showInfo() {
      if (this.$route.path.slice(1) == "meetingroom_one") {
        this.room_name = "会议室一";
        this.updateMeetingroom01();
      } else if (this.$route.path.slice(1) == "meetingroom_two") {
        this.room_name = "会议室二";
        this.updateMeetingroom02();
      } else if (this.$route.path.slice(1) == "office") {
        this.room_name = "办公室";
        this.updateOffice();
      } else if (this.$route.path.slice(1) == "tearoom") {
        this.room_name = "茶水间";
        this.updateTearoom();
      } else if (this.$route.path.slice(1) == "corridor") {
        this.room_name = "走廊";
        this.updateCorridor();
      }
    },
    updateMeetingroom01() {
      axios.post('api/structure/room/query', "meetingroom01",
        {
          headers: {
            'Content-Type': 'application/text'
          }
        }).then(res => {
          this.temperature = res.data.temperature;
          this.count = res.data.people_count;
        }).catch(err => {
          console.log(err)
        })
    },
    updateMeetingroom02() {
      axios.post('api/structure/room/query', "meetingroom02",
        {
          headers: {
            'Content-Type': 'application/text'
          }
        }).then(res => {
          this.temperature = res.data.temperature;
          this.count = res.data.people_count;
        }).catch(err => {
          console.log(err)
        })
    },
    updateTearoom() {
      axios.post('api/structure/room/query', "tearoom01",
        {
          headers: {
            'Content-Type': 'application/text'
          }
        }).then(res => {
          this.temperature = res.data.temperature;
          this.count = res.data.people_count;
        }).catch(err => {
          console.log(err)
        })
    },
    updateOffice() {
      axios.post('api/structure/room/query', "laboratory01",
        {
          headers: {
            'Content-Type': 'application/text'
          }
        }).then(res => {
          console.log(res)
          this.temperature = res.data.temperature;
          this.count = res.data.people_count;
        }).catch(err => {
          console.log(err)
        })
    },
    updateCorridor() {
      axios.post('api/structure/room/query', "corridor01",
        {
          headers: {
            'Content-Type': 'application/text'
          }
        }).then(res => {
          console.log(res)
          this.temperature = res.data.temperature;
          this.count = res.data.people_count;
        }).catch(err => {
          console.log(err)
        })
    }
  },
}
</script>

<style>
.infor {
  margin-top: 3vh;
  margin-bottom: 0;
  white-space: nowrap;
}

.Specific_Device_container,
.Specific_MeetingRoom_one_container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.specific-name::-webkit-scrollbar,
.information-inner::-webkit-scrollbar {
  display: none;
}

.specific-Room {
  margin-top: 15vh;
  margin-bottom: 0;
  white-space: nowrap;
}

.specific-name {
  display: block;
  overflow-x: scroll;
  width: 100%;
  height: 25px;
  white-space: nowrap;
  margin-top: 2%;
  margin-bottom: 5%;
  text-align: center;
  font-weight: bold;
}

.room_row {
  height: 75%;
  width: 98%;
  margin-left: 1%;
  margin-right: 1%;
}

.Device_row {
  height: 25%;
  width: 98%;
  margin-left: 1%;
  margin-right: 1%;
}

.information-inner {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 25px);
  overflow-x: scroll;
  overflow-y: scroll;
}

.device {
  display: inline-block;
  height: 100%;
  margin-left: 3%;
  margin-right: 3%;
}
</style>

