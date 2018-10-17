<template>
   <div>
       <div class="container">
           <div class="row">
               <h2 class="text-success">
                   {{messege}}
               </h2>


                   <table class="table table-striped table-bordered table-hover">
                       <thead class="bg-dark text-white">
                       <tr>
                           <td>Product Name</td>
                           <td>Product Type</td>
                           <td>Product Quantity </td>
                           <td>Product Description</td>
                           <td>Action</td>

                       </tr>
                       </thead>
                       <tbody>
                       <tr v-for="product in products">
                           <td>{{product.pro_name}}</td>
                           <td>{{product.pro_type}}</td>
                           <td>{{product.pro_qty}}</td>
                           <td>{{product.pro_des}}</td>
                           <td class="d-flex justify-content-center align-items-center">

                               <router-link  class="btn btn-outline-dark"  :to="{name:'editProduct',params:{id:product.id}}">edit</router-link>
                               <button class="btn btn-outline-dark" @click.prevent="deleteProduct(product.id)">
                                  Delete
                               </button>

                           </td>


                       </tr>

                       </tbody>

                   </table>


           </div>
       </div>
   </div>
</template>

<script>
    export default {
        name: "viewProduct",


        data(){

            return{

                    products:[],
                     messege:''

            }


        },




        created(){

                 this.show()


        },


        methods:{


            deleteProduct(id){


                    axios.delete('/product/'+id).then(response=>{


                           this.messege = response.data.messege,
                        this.show()

                    })

            },

            show(){

                axios.get('product').then(response=>{

                    this.products = response.data.products


                })


            }



        }






    }
</script>

<style scoped>

</style>