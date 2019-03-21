<template>
<v-container>
  <form>
    <v-text-field
      v-model="name"
      v-validate="'required|max:30'"
      :counter="30"
      :error-messages="errors.collect('name')"
      label="Name"
      data-vv-name="name"
      color="lime"
      dark
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      color="lime"
      dark      
      required
    ></v-text-field>
    <!-- <v-select
      v-model="select"
      v-validate="'required'"
      :items="items"
      :error-messages="errors.collect('select')"
      label="Select"
      data-vv-name="select"
      color="lime"
      dark
      required
    ></v-select> -->
    <v-textarea
     color="lime"
     dark
     solo
    ></v-textarea>
    <v-checkbox
      v-model="checkbox"
      v-validate="'required'"
      :error-messages="errors.collect('checkbox')"
      value="1"
      label="Option"
      data-vv-name="checkbox"
      type="checkbox"
      color="lime"
      dark      
      required
    ></v-checkbox>

    <v-btn class="lime grey--text-darken-4" @click="submit">submit</v-btn>
    <v-btn class="lime grey--text-darken-4" @click="clear">clear</v-btn>
  </form>
  <v-snackbar
   v-model="snackBar.show"
   :color="snackBar.color"
   bottom
   right
   :timeout="6000"
   class="font-weight-bold"
  >
    {{snackBar.message}}
  </v-snackbar>
</v-container>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  import {functions} from '@/main.js'
  // import ja from 'vee-validate/dist/locale/ja'

  // Validator.localize('ja', ja);
  Vue.use(VeeValidate);

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      name: '',
      email: '',
      select: null,
      items: [
        '話を聞きたい',
        'スケジュールを確認したい',
      ],
      checkbox: null,
      loading: false,
      snackBar: {
        show: false,
        color: '',
        message: ''
      },      
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          }
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        if(this.$validator.validateAll()) {
           this.loading = true
          const mailer = functions.httpsCallable('submit')

          mailer()
            .then(() => {
              this.formReset()
              this.showSnackBar(
                'success',
                'お問い合わせありがとうございます。送信完了しました'
              )
            })
            .catch(err => {
              this.showSnackBar(
                'error',
                '送信に失敗しました。時間をおいて再度お試しください'
              )
              console.log(err)
            })
            .finally(() => {
              this.loading = false
            })
        }
                  
      }
    },
    showSnackBar: function (color, message) {
      this.snackBar.message = message
      this.snackBar.color = color
      this.snackBar.show = true
    },
    formReset: function () {
      this.$refs.form.reset()
    },    
    clear () {
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$validator.reset()
    }
    
  }
</script>

<style>

</style>
