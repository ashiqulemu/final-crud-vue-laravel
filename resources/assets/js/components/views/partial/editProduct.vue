<template>
    <div>

        <form @submit.prevent="updateProduct()">

       {{message}}     <br>
            <h2 class="text-primary"> Update  this product</h2>


            <fieldset class="form-group">
                <label >Product Name</label>
                <input type="text" class="form-control" v-model=" pro_name" name="pro_name">
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


            <button type="submit" class="btn btn-primary">Update</button>
        </form>


    </div>
</template>

<script>
    export default {
        name: "editProduct",


        data(){

            return{

                pro_name:'',
                pro_type:'',
                pro_qty:'',
                pro_des:'',
                message:''


            }

        },


        created(){


            axios.get('/product/'+this.$route.params.id+'/edit', ).then(response=>{


                this.pro_name=response.data.unique.pro_name,


                this.pro_type =response.data.unique.pro_type,

                this.pro_qty =response.data.unique.pro_qty,

                this.pro_des = response.data.unique.pro_des


            })


        },

        methods:{

            updateProduct(){


               axios.patch('/product/'+this.$route.params.id,{


                   pro_name:this.pro_name,
                   pro_type:this.pro_type,
                   pro_qty:this.pro_qty,
                   pro_des:this.pro_des



               }).then(response=>{

                   this.message = response.data.messege

               })


            }


        }



    }
</script>

<style scoped>

</style>