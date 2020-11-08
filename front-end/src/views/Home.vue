<template>
  <div class="home">
    <v-dialog v-model="dialog"       
      transition="dialog-bottom-transition" >
    <template v-slot:activator="">
    <v-container fluid>
      <div class="seat-title-box text-center" @click="seatsUpdate()">강단</div>
      <br>
        <div class= "chapel">
          <div v-for="i in seats.seat_line_1" v-bind:key="i.id">
              <div v-if="i.seat_active === 1" class="seat enable" @click="createSelect(i,'seat_line_1')">{{i.id}}</div>
              <div v-if="i.seat_active === 0" class="seat-none"></div>
              <div v-if="i.seat_active === 2" class="seat disable"></div>  
              <div v-if="i.seat_active === 4" class="greenBox" @click="euodiaOpen(i,'seat_line_1')" >{{i.id}}<br>{{i.name}}</div> 
              <div v-if="i.seat_active === 5" class="blueBox" @click="deleteSelect(i,'seat_line_1')">{{i.id}}<br>{{i.name}}</div>
          </div>
        </div>
        <div class= "chapel">
          <div v-for="i in seats.seat_line_2" v-bind:key="i.id">
              <div v-if="i.seat_active === 1" class="seat enable" @click="createSelect(i,'seat_line_2')">{{i.id}}</div>
              <div v-if="i.seat_active === 0" class="seat-none"></div>
              <div v-if="i.seat_active === 2" class="seat disable"></div>  
              <div v-if="i.seat_active === 4" class="greenBox" @click="euodiaOpen(i,'seat_line_2')">{{i.id}}</div> 
              <div v-if="i.seat_active === 5" class="blueBox" @click="deleteSelect(i,'seat_line_2')">{{i.id}}<br>{{i.name}}</div>
          </div>
        </div> 
        <div class= "chapel">
          <div v-for="i in seats.seat_line_3" v-bind:key="i.id">
              <div v-if="i.seat_active === 1" class="seat enable" @click="createSelect(i,'seat_line_3')">{{i.id}}</div>
              <div v-if="i.seat_active === 0" class="seat-none"></div>
              <div v-if="i.seat_active === 2" class="seat disable"></div>
              <div v-if="i.seat_active === 4" class="greenBox" @click="euodiaOpen(i,'seat_line_3')">{{i.id}}</div>   
              <div v-if="i.seat_active === 5" class="blueBox" @click="deleteSelect(i,'seat_line_3')">{{i.id}}<br>{{i.name}}</div>
          </div>
        </div>
        <div class= "chapel">
          <div v-for="i in seats.seat_line_4" v-bind:key="i.id">
              <div v-if="i.seat_active === 1" class="seat enable" @click="createSelect(i,'seat_line_4')">{{i.id}}</div>
              <div v-if="i.seat_active === 0" class="seat-none"></div>
              <div v-if="i.seat_active === 2" class="seat disable"></div>   
              <div v-if="i.seat_active === 4" class="greenBox" @click="euodiaOpen(i,'seat_line_4')">{{i.id}}</div> 
              <div v-if="i.seat_active === 5" class="blueBox" @click="deleteSelect(i,'seat_line_4')">{{i.id}}<br>{{i.name}}</div>
          </div>
        </div>
        <div class= "chapel">
          <div v-for="i in seats.seat_line_5" v-bind:key="i.id">
              <div v-if="i.seat_active === 1" class="seat enable" @click="createSelect(i,'seat_line_5')">{{i.id}}</div>
              <div v-if="i.seat_active === 0" class="seat-none"></div>
              <div v-if="i.seat_active === 2" class="seat disable"></div> 
              <div v-if="i.seat_active === 4" class="greenBox" @click="euodiaOpen(i,'seat_line_5')">{{i.id}}</div>  
              <div v-if="i.seat_active === 5" class="blueBox" @click="deleteSelect(i,'seat_line_5')">{{i.id}}<br>{{i.name}}</div>

          </div>
        </div>
        <div class= "chapel">
          <div v-for="i in seats.seat_line_6" v-bind:key="i.id">
              <div v-if="i.seat_active === 1" class="seat enable" @click="createSelect(i,'seat_line_6')">{{i.id}}</div>
              <div v-if="i.seat_active === 0" class="seat-none"></div>
              <div v-if="i.seat_active === 2" class="seat disable"></div>    
              <div v-if="i.seat_active === 4" class="greenBox" @click="euodiaOpen(i,'seat_line_6')">{{i.id}}</div> 
              <div v-if="i.seat_active === 5" class="blueBox" @click="deleteSelect(i,'seat_line_6')">{{i.id}}<br>{{i.name}}</div>

          </div>
        </div>
        <br>
        <div class= "chapel">
          <div v-for="i in seats.seat_line_7" v-bind:key="i.id">
              <div v-if="i.seat_active === 1" class="seat enable" @click="createSelect(i,'seat_line_7')">{{i.id}}</div>
              <div v-if="i.seat_active === 0" class="seat-none"></div>
              <div v-if="i.seat_active === 2" class="seat disable"></div>  
              <div v-if="i.seat_active === 4" class="greenBox" >{{i.id}}</div> 
              <div v-if="i.seat_active === 5" class="blueBox" @click="deleteSelect(i,'seat_line_7')">{{i.id}}<br>{{i.name}}</div>
          </div>
        </div>
        <div class= "chapel">
          <div v-for="i in seats.seat_line_8" v-bind:key="i.id">
              <div v-if="i.seat_active === 1" class="seat enable" @click="createSelect(i,'seat_line_8')">{{i.id}}</div>
              <div v-if="i.seat_active === 0" class="seat-none"></div>
              <div v-if="i.seat_active === 2" class="seat disable"></div>  
              <div v-if="i.seat_active === 4" class="greenBox" >{{i.id}}</div> 
              <div v-if="i.seat_active === 5" class="blueBox" @click="deleteSelect(i,'seat_line_8')">{{i.id}}<br>{{i.name}}</div>
          </div>
        </div>
        <div class= "chapel">
          <div v-for="i in seats.seat_line_9" v-bind:key="i.id">
              <div v-if="i.seat_active === 1" class="seat enable" @click="createSelect(i,'seat_line_9')">{{i.id}}</div>
              <div v-if="i.seat_active === 0" class="seat-none"></div>
              <div v-if="i.seat_active === 2" class="seat disable"></div>  
              <div v-if="i.seat_active === 4" class="greenBox">{{i.id}}</div> 
              <div v-if="i.seat_active === 5" class="blueBox" @click="deleteSelect(i,'seat_line_9')">{{i.id}}<br>{{i.name}}</div>
          </div>
        </div>
        <div class= "chapel">
          <div v-for="i in seats.seat_line_10" v-bind:key="i.id">
              <div v-if="i.seat_active === 1" class="seat enable" @click="createSelect(i,'seat_line_10')">{{i.id}}</div>
              <div v-if="i.seat_active === 0" class="seat-none"></div>
              <div v-if="i.seat_active === 2" class="seat disable"></div>  
              <div v-if="i.seat_active === 4" class="greenBox">{{i.id}}</div> 
              <div v-if="i.seat_active === 5" class="blueBox" @click="deleteSelect(i,'seat_line_10')">{{i.id}}<br>{{i.name}}</div>
          </div>
        </div>      
        <div class= "chapel">
          <div v-for="i in seats.seat_line_11" v-bind:key="i.id">
              <div v-if="i.seat_active === 1" class="seat enable" @click="createSelect(i,'seat_line_11')">{{i.id}}</div>
              <div v-if="i.seat_active === 0" class="seat-none"></div>
              <div v-if="i.seat_active === 2" class="seat disable"></div>  
              <div v-if="i.seat_active === 4" class="greenBox">{{i.id}}</div> 
              <div v-if="i.seat_active === 5" class="blueBox" @click="deleteSelect(i,'seat_line_11')">{{i.id}}<br>{{i.name}}</div>
          </div>
        </div>   
        <div class= "chapel">
          <div v-for="i in seats.seat_line_12" v-bind:key="i.id">
              <div v-if="i.seat_active === 1" class="seat enable" @click="createSelect(i,'seat_line_12')">{{i.id}}</div>
              <div v-if="i.seat_active === 0" class="seat-none"></div>
              <div v-if="i.seat_active === 2" class="seat disable"></div>  
              <div v-if="i.seat_active === 4" class="greenBox">{{i.id}}</div> 
              <div v-if="i.seat_active === 5" class="blueBox" @click="deleteSelect(i,'seat_line_12')">{{i.id}}<br>{{i.name}}</div>
          </div>
        </div>         
        <div class= "chapel">
          <div v-for="i in seats.seat_line_13" v-bind:key="i.id">
              <div v-if="i.seat_active === 1" class="seat enable" @click="createSelect(i,'seat_line_13')">{{i.id}}</div>
              <div v-if="i.seat_active === 0" class="seat-none"></div>
              <div v-if="i.seat_active === 2" class="seat disable"></div>  
              <div v-if="i.seat_active === 4" class="greenBox">{{i.id}}</div> 
              <div v-if="i.seat_active === 5" class="blueBox" @click="deleteSelect(i,'seat_line_13')">{{i.id}}<br>{{i.name}}</div>
          </div>
        </div>  
         <br>
      <div class="seat-title-box text-center" >입구</div>
              <div class= "chapel-text">
              <div  class="seat enable"></div>선택가능
              <div  class="seat disable"></div>선택불가
              <div  class="seat greenBox"></div>지정석
              <div  class="seat blueBox"></div>선택완료
        </div>
    </v-container>
      </template>
      <v-card>
          <v-card-title>
          <span class="headline">좌석 예약</span> 
          </v-card-title>

          <v-card-text v-if="loading===false">
            <v-container>
              <v-row>
                    <v-col cols="12" sm="12" md="12">
                        <v-text-field v-model="selectedItem.name" counter="5" hint="부적절한 이름을 적으실 경우 관리자에 의해 삭제 될 수 있습니다." label="이름"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                        <v-text-field  v-model="selectedItem.pw"  counter="4"  hint="최소한 4글자 이상 적어주세요" type="password" label="비밀번호"></v-text-field>
                    </v-col>
                </v-row> 
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#009624" dark @click="close()">취소</v-btn>
              <v-btn color="red" dark @click="ok()">예약</v-btn>
            </v-card-actions>
          </v-card-text>
          <v-card-text v-if="loading===true">
            <v-progress-circular
              :size="50"
              color="amber"
              indeterminate
            ></v-progress-circular>
          </v-card-text>
      </v-card>
    </v-dialog>

      <v-dialog v-model="dialogDelete" >
        <v-card>
          <v-card-title>
            <span class="headline">좌석 확인</span> 
          </v-card-title>
          <v-card-text v-if="loading===false">
            <v-container>
              <v-row>
                    <v-col cols="12" sm="2" md="12">
                        <v-text-field v-model="selectedItem.seatId" readonly  label="좌석"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="2" md="12">
                        <v-text-field  v-model="selectedItem.name" readonly  label="예약자 이름"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="2" md="12">
                        <v-text-field  v-model="selectedItem.pwOk"  type="password" label="비밀번호"></v-text-field>
                    </v-col>          
                </v-row> 
            </v-container>
            <v-card-actions>
            <v-spacer></v-spacer>
              <v-btn color="#009624" dark @click="deleteClose()">취소</v-btn>
              <v-btn color="red" dark @click="deleteSeat()">삭제</v-btn>
            </v-card-actions>
          </v-card-text>
          <v-card-text v-if="loading===true">
            <v-progress-circular
              :size="50"
              color="amber"
              indeterminate
            ></v-progress-circular>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog v-model="euodiaOk" >
        <v-card>
          <v-card-title>
            <span class="headline">유오디아 확인</span> 
          </v-card-title>
            <v-container>
              <v-row>
                    <v-col cols="12" sm="2" md="12">
                        <v-text-field v-model="euodiaOkpw" type="password"  label="유오디아"></v-text-field>
                    </v-col> 
                </v-row> 
            </v-container>
            <v-card-actions>
            <v-spacer></v-spacer>
              <v-btn color="#009624" dark @click="euodiaGo()">확인</v-btn>
              <v-btn color="red" dark @click="euodiaClose()">취소</v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="seatsUpdateOk" >
        <v-card>
          <v-card-title>
            <span class="headline">관리자 확인</span> 
          </v-card-title>
            <v-container>
              <v-row>
                    <v-col cols="12" sm="2" md="12">
                        <v-text-field v-model="seatsUpdateOkPw" type="password"  label="관리자 확인"></v-text-field>
                    </v-col> 
                </v-row> 
            </v-container>
            <v-card-actions>
            <v-spacer></v-spacer>
              <v-btn color="#009624" dark @click="seatsOk()">확인</v-btn>
              <v-btn color="red" dark @click="seatsClose()">취소</v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="seatsActiveUpdate" >
        <v-card>
          <v-card-title>
            <span class="headline">좌석 단계별 설정</span> 
          </v-card-title>
            <v-container>
              <v-row>
                <v-col>
                    <v-col cols="12" sm="2" md="12">
                      <!--  <v-text-field v-model="seatsActviceStep" label="50 or 30"></v-text-field> -->
                      <v-radio-group
                        v-model="seatsActviceStep"
                        column
                      >
                        <v-radio
                          label="거리두기 1 단계 수용 좌석 50%"
                          color="red"
                          value="50"
                        ></v-radio>
                        <v-radio
                          label="거리두기 1.5 단계 수용  좌석 30%"
                          color="primary"
                          value="30"
                        ></v-radio>
                      </v-radio-group>
                    </v-col> 
                  </v-col> 
                </v-row> 
            </v-container>
            <v-card-actions>
            <v-spacer></v-spacer>
              <v-btn color="#009624" dark @click="seatsActiveUpdateOk()">확인</v-btn>
              <v-btn color="red" dark @click="seatsActiveUpdateClose()">취소</v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
  </div>


  
</template>

<script>

import service from '../service/seats'
import io from 'socket.io-client';

// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapState([
      'seats'
    ]),

    // formTitle () {
    //   return this.editedIndex === -1 ? 'New Item' : this.selectedItem.project_name
    // },


  },
  data(){
    return{

      dialog: false,
      dialogDelete:false,
      euodiaOk:false,
      loading:false,

      seatsUpdateOk:false,
      seatsUpdateOkPw:'',

      seatsActiveUpdate:false,
      seatsActviceStep:30,

      euodiaOkpw:'',
      euodiaOkid:{
        id:''
      },
      euodiaOkseat:'',

      selectedItem: {
        name:'',
        pw:'',
        pwOk:'',
        seatId:'' ,
        seat:''

      },
      defaultItem: {
        name:'',
        pw:'',
        pwOk:'',
        seatId:'' ,
        seat:''
      }
    }
  },

  created() { 
    this.$socket.on('chat', (data)=> { 
      this.$store.dispatch('modifySeats',data)
    }) 
  },
    methods: {
        seatsUpdate(){
          this.seatsUpdateOk = true
        },

        seatsOk(){
          if(this.seatsUpdateOkPw === 'sds3570'){
            this.seatsUpdateOk = false
            this.seatsActiveUpdate = true    
            this.seatsUpdateOkPw = ''

          }
        },

        seatsClose(){
          this.seatsUpdateOkPw = ''
          this.seatsUpdateOk = false

        },

        seatsActiveUpdateOk(){
          // alert("감사합니다 : ", this.seatsActviceStep)
          console.log("this.seatsActviceStep :",this.seatsActviceStep )

          let param = new Object()
          param.step =  this.seatsActviceStep

          service.seatsChange(param)
            .then(result => {
              if(result){
                console.log('result',result)
                console.log('result.data',result.data)
                this.$store.dispatch('updateList', result.data)
              }else{
                alert("저장 실패 관리자에게 문의 하세요")
              }
            })
          this.seatsActiveUpdate = false
        },

        seatsActiveUpdateClose(){
          this.seatsActiveUpdate = false
        },

        sendMessage (data) { 
          this.$socket.emit('chat',data); 
        },

        createSelect(i,text) {
          this.dialog = true 
          this.selectedItem.seatId = i.id
          this.selectedItem.seat = text
        },
        
        euodiaOpen(i,text){
          if(i.name !== ""){
            this.euodiaOk = false;
            return;
          }
          this.euodiaOk = true;
          this.euodiaOkid.id = i.id
          this.euodiaOkseat = text
        },

        euodiaClose(){
          this.euodiaOk = false;
          this.euodiaOkid.id =''
        },

        euodiaGo(){
          if(this.euodiaOkpw === 'ok'){
            this.euodiaOk = false;
            this.euodiaOkpw = '';

            this.createSelect(this.euodiaOkid,this.euodiaOkseat)
          }else{
            alert('비밀번호가 틀렸습니다.')
          }
        },


        close () {
          this.dialog = false
          // this.sendMessage()
          this.$nextTick(() => {
            this.selectedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },

        ok(){
          if(this.selectedItem.pw === '' || this.selectedItem.name === ''){
            alert('이름 혹은 비밀번호 적어주세요.')
            return
          }
          let param = new Object()
          param.name =  this.selectedItem.name
          param.pw = this.selectedItem.pw
          param.seat = this.selectedItem.seat 
          param.seatId=this.selectedItem.seatId 
          param.seat_active = 5
          this.loading = true
          service.seatsModify(param)
            .then(result => {
              this.loading = false
              if(result.data){
                this.$store.dispatch('modifySeats', param)
                this.selectedItem = Object.assign({}, this.defaultItem)
                this.sendMessage(param)
              }else{
                alert("저장 실패 관리자에게 문의 하세요")
              }
              this.close() 
            })
        },

        deleteSelect(i,text){
          this.dialogDelete = true 
          this.selectedItem.seatId = i.id
          this.selectedItem.name = i.name
          this.selectedItem.pw = i.pw
          this.selectedItem.seat = text
        },
        deleteClose(){
          this.dialogDelete = false
          this.$nextTick(() => {
            this.selectedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
        deleteSeat(){

         if(this.selectedItem.pwOk ==='admin' || this.selectedItem.pwOk === this.selectedItem.pw ){
            let param = new Object()
            param.name =  ''
            param.pw = ''
            param.seat = this.selectedItem.seat 
            param.seatId=this.selectedItem.seatId
            if(this.selectedItem.seatId === 'A-17' || this.selectedItem.seatId === 'A-21' || 
              this.selectedItem.seatId === 'B-16' || this.selectedItem.seatId === 'B-20' || 
              this.selectedItem.seatId === 'C-17' ||this.selectedItem.seatId === 'C-21' ||
              this.selectedItem.seatId === 'D-16' || this.selectedItem.seatId === 'D-20' || 
              this.selectedItem.seatId === 'E-17' ||this.selectedItem.seatId === 'E-21' ||
              this.selectedItem.seatId === 'F-17' ||this.selectedItem.seatId === 'F-21' 
              ){
              param.seat_active = 4
            }else{
              param.seat_active = 1
            }
            
            this.loading = true
            service.seatsModify(param)
              .then(result => {
                this.loading = false
                if(result.data){
                  this.$store.dispatch('modifySeats', param)
                  this.selectedItem = Object.assign({}, this.defaultItem)
                  this.sendMessage(param)
                }else{
                  alert("저장 실패 관리자에게 문의 하세요")
                }
                this.deleteClose() 
              })
          }else{
            alert('비밀번호를 확인해주세요\n잊으셨다면 관리자에게 문의하세요.')
            return
          }
        }
    }
}
</script>

<style scoped>
  .home{
    width: 100%;
        overflow-x: visible;
    overflow-y: hidden;
  }

  .chapel-text{
    display: flex;
    flex-direction: row;
    /* justify-content:center; */
    /* align-self: center; */
    width: 100%;
    height: 100%;
  }

  .chapel-text .seat{
            color:#fff;
            margin: 1px;
            width: 25px;
            height: 25px;
            border-radius: 3px;
            font-size: 0.3rem;
            text-align: center; 
        }

  .chapel-text strong{
    color:#9E9E9E;
    padding-right: 20px;
  }      

  .chapel{
    display: flex;
    flex-direction: row;
    /* justify-content:center; */
    align-items:center;
    width: 100%;
    height: 100%;
  }
  .line {
      overflow: hidden;
  }

  .seat {
      color:#fff;
      margin: 1px;
      width: 25px;
      height: 25px;
      border-radius: 3px;
      font-size: 0.3rem;
      text-align: center; 
  }

  .seat-none {
      color:#fff;
      margin: 0px;
      /* float: left; */
      width: 10px;
      height: 10px;
      /* min-width: 68px; */
      /* min-height: 65px; */
      border-radius: 3px;
      /* font-size: 0.7rem; */
      font-size: 0.7rem;
      text-align: center; 
  }

  .enable {
      background:#9E9E9E;
  }

  .enable:hover {
      background: #fbc02d;
  }

  .disable {
      background:#5ABA85;
  }

  .greenBox {
    background: #B4D8C3;
    color: #fff;
    /* font-family: 'Helvetica', 'Arial', sans-serif; */
    font-size: 0.3rem;
    /* font-weight: thin; */
    /* text-align: center; */
    text-align: center; 
      width: 25px;
      height: 25px;
    border-radius: 3px;
    margin: 1px;
  }

  .greenBox2 {
    background: #B4D8C3;
    color: #5ABA85;
    /* font-family: 'Helvetica', 'Arial', sans-serif; */
    font-size: 1.0rem;
    /* font-weight: bold; */
    /* text-align: center; */
    text-align: center; 
      width: 25px;
      height: 25px;
    border-radius: 3px;
    margin: 1px;
  }
  .blueBox{
    background: #1976D2;
      color:#fff;
      margin: 1px;
      /* float: left; */
      width: 25px;
      height: 25px;
      /* min-width: 68px; */
      /* min-height: 65px; */
      border-radius: 3px;
      /* font-size: 0.7rem; */
      font-size: 0.3rem;
      text-align: center; 
  }
  .blueBox:hover {
      background: #fbc02d;
  }

  .seat-title-box{
    /* background-color: #5ABA85; */
    color: #5ABA85;
    font-size: 2rem;
    border: 2px solid #5ABA85;
    border-radius: 2px;
    width: 600px;
    /* width: 100%; */

    /* widows: ; */
    margin: 0 auto;
  }




@media screen and (min-width: 769px) {

  .chapel{
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
  }

  .chapel-text{
    display: flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
  }

  .chapel-text .seat{
    color:#fff;
    margin: 1px;
    width: 30px;
    height: 20px;
    padding-right: 10px;
    border-radius: 3px;
    font-size: 0.3rem;
    text-align: center; 
    }

  .chapel-text strong{
    color:#9E9E9E;
    font-size: 0.3rem;
    padding:0px;
    margin: 0px;
    /* padding-right: 30px;
    padding-left: 30px; */
  }      

  .seat {
      color:#fff;
      margin: 2px;
      /* float: left; */
      width: 50px;
      height: 50px;
      /* min-width: 68px; */
      /* min-height: 65px; */
      border-radius: 3px;
      /* font-size: 0.7rem; */
      font-size: 0.7rem;
      text-align: center; 
  }
  .enable {
      background:#9E9E9E;
  }

  .enable:hover {
      background: black;
  }

  .disable {
      background:  #5ABA85;
  }

  .greenBox {
    background: #B4D8C3;
    color: #fff;
    /* font-family: 'Helvetica', 'Arial', sans-serif; */
    font-size: 0.7rem;
    /* font-weight: thin; */
    /* text-align: center; */
    text-align: center; 
    width: 50px;
    height: 50px;
    border-radius: 3px;
    margin: 2px;
  }

  .greenBox2 {
    background: #B4D8C3;
    color: #5ABA85;
    /* font-family: 'Helvetica', 'Arial', sans-serif; */
    font-size: 2.5rem;
    /* font-weight: bold; */
    /* text-align: center; */
    text-align: center; 
    width: 50px;
    height: 50px;
    border-radius: 3px;
    margin: 2px;
  }
  .blueBox{
    background: rgb(75, 75, 224);
      color:#fff;
      margin: 2px;
      /* float: left; */
      width: 50px;
      height: 50px;
      /* min-width: 68px; */
      /* min-height: 65px; */
      border-radius: 3px;
      /* font-size: 0.7rem; */
      font-size: 0.7rem;
      text-align: center; 
  }

  .seat-title-box{
    /* background-color: #5ABA85; */
    color: #5ABA85;
    font-size: 2rem;
    border: 2px solid #5ABA85;
    border-radius: 2px;
    width: 1350px;
    margin: 0 auto;
  }

}


</style>