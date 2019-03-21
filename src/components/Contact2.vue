<template>
  <v-container>
    <v-form ref="form" v-model="contactFormValidation.valid" lazy-validation>
      <v-text-field
        v-model="contactForm.name"
        :rules="contactFormValidation.nameRules"
        label="Name"
        required
        dark
        color="lime"
      ></v-text-field>
      <v-text-field
        v-model="contactForm.email"
        :rules="contactFormValidation.emailRules"
        label="E-mail"
        required
        dark
        color="lime"
      ></v-text-field>
      <v-textarea
        v-model="contactForm.contents"
        :rules="contactFormValidation.contentsRules"
        label="Contents"
        required
        dark
        color="lime"
      ></v-textarea>
      <v-btn
        :loading="contactForm.loading"
        :disabled="!contactFormValidation.valid"
        @click="sendMail()"
        block
        large
        color="lime"
        class="mt-4 font-weight-bold"
              
      >Send
      </v-btn>
    </v-form>
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
  // import VeeValidate from 'vee-validate'
  import {functions} from '@/main.js'
  // import ja from 'vee-validate/dist/locale/ja'

  // Validator.localize('ja', ja);
  // Vue.use(VeeValidate);

  export default {
    data: () => ({
      contactForm: {
        name: '',
        contents: '',
        email: '',
        loading: false
      },
      contactFormValidation: {
        valid: false,
        nameRules: [v => !!v || '名前は必須項目です'],
        emailRules: [v => !!v || 'メールアドレスは必須項目です'],
        contentsRules: [v => !!v || '内容は必須項目です']
      },
      snackBar: {
        show: false,
        color: '',
        message: ''
      }
    }),
    methods: {
      sendMail: function () {
        if (this.$refs.form.validate()) {
          this.contactForm.loading = true
          const mailer = functions.httpsCallable('sendMail')

          mailer(this.contactForm)
            .then(() => {
              this.formReset()
              this.showSnackBar(
                'lime',
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
              this.contactForm.loading = false
            })
        }
      },
      showSnackBar: function (color, message) {
        this.snackBar.message = message
        this.snackBar.color = color
        this.snackBar.show = true
      },
      formReset: function () {
        this.$refs.form.reset()
      }
    }            
  }
</script>

<style>
v-container {
  max-width:980px;
}
</style>
