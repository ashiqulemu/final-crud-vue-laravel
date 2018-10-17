<template>
    <div>


        <div class="container">
            <div class="row">
               <div class="col-md-6 mx-auto">
                 <h2>  {{messege}}</h2>
                   <form @submit.prevent="createProduct()">

                       <br>
                       <h2 class="text-primary"> Add New product</h2>


                       <fieldset class="form-group">
                           <label >Product Name</label>
                           <input type="text" class="form-control" v-model="pro_name">
                       </fieldset>

                       <fieldset class="form-group">
                           <label >Product Type</label>
                           <input type="text" class="form-control" v-model="pro_type">
                       </fieldset>
                       <fieldset class="form-group">
                           <label >Product Qty</label>
                           <input type="number" class="form-control" v-model="pro_qty">
                       </fieldset>

                       <fieldset class="form-group">
                           <label >Product Description</label>
                           <input type="text" class="form-control" v-model="pro_des">
                       </fieldset>


                       <button type="submit" class="btn btn-primary">Submit</button>
                   </form>
               </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "createProduct",


        data(){

            return{

                pro_name:'',
                pro_type:'',
                pro_qty:'',
                pro_des:'',
                messege:''

            }
        },


        methods:{

            createProduct(){

                      axios.post('/product',{

                          pro_name:this.pro_name,
                          pro_type:this.pro_type,
                          pro_qty:this.pro_qty,
                          pro_des:this.pro_des,

                } ).then(response=>{

                           this.messege = response.data.messege,

                              this.pro_name='',
                              this.pro_type='',
                              this.pro_qty='',
                              this.pro_des=''

                      }) .catch()



            }

        }


    }
</script>

<style scoped>

</style>