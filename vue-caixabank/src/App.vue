<template>
  <div id="app">
    <div class="language-select">
      <select id="language" v-model="selectedLanguage" @change="changeLanguage">
        <option v-for="language in availableLanguages" :key="language.code" :value="language.code">
          {{ language.name }}
        </option>
      </select>
    </div>
    <div class="step-indicator">
      <template v-for="(index, idx) in 5">
        <div :class="['v-form__step-wrap', { last: idx === 4 }]">
          <span :key="index" :class="['v-form__step-element', { active: step === index, complete: step > index }]">
            {{ index }}
          </span>
          <span :class="['v-form__step-title', { current: step === index }]">{{ $t(`stepTitles[${idx}]`) }}</span>
        </div>
      </template>
    </div>
    <transition-group name="switch" tag="div" class="form-container">

      <template v-if="step === 1" key="form1">
        <Form ref="form" @submit="handleContinue">

          <label for="input1" class="v-form__label" v-text="$t('name')"></label>
          <Field id="input1" class="v-form__input-text" name="name" type="text" :rules="validateIsEmpty"
            v-model="formValues[step].name" />
          <ErrorMessage class="v-form__error" name="name" />

          <label for="input2" class="v-form__label" v-text="$t('dni')"></label>
          <Field id="input2" class="v-form__input-text" name="dni" type="text" :rules="validateDni"
            v-model="formValues[step].dni" />
          <ErrorMessage class="v-form__error" name="dni" />

          <label for="input3" class="v-form__label" v-text="$t('date')"></label>
          <Field id="input3" class="v-form__input-text" name="birth" type="text" :rules="validateIsEmpty"
            v-model="formValues[step].birth" />
          <ErrorMessage class="v-form__error" name="birth" />

          <label for="input4" class="v-form__label" v-text="$t('address')"></label>
          <Field id="input4" class="v-form__input-text" name="address1" type="text" :rules="validateIsEmpty"
            v-model="formValues[step].address1" />
          <ErrorMessage class="v-form__error" name="address1" />

          <label for="input5" class="v-form__label" v-text="$t('email')"></label>
          <Field id="input5" class="v-form__input-text" name="email" type="email" :rules="validateEmail"
            v-model="formValues[step].email" />
          <ErrorMessage class="v-form__error" name="email" />

          <label for="input6" class="v-form__label" v-text="$t('tel')"></label>
          <Field id="input6" class="v-form__input-text" name="telephone1" type="text" :rules="validateTel"
            v-model="formValues[step].telephone1" />
          <ErrorMessage class="v-form__error" name="telephone1" />

          <div class="v-form__conditions-wrapper">
            <Field v-slot="{ field }" class="v-form__conditions-check" name="terms" type="checkbox" :value="true"
              :rules="validateTerms" v-model="formValues[step].terms">
              <input id="terms" type="checkbox" name="terms" v-bind="field" :value="true" />
              <label for="terms" class="v-form__label v-form__label--checkbox" v-text="$t('terms')"></label>
            </Field>
            <ErrorMessage class="v-form__error" name="terms" />
          </div>
          <div class="v-form__button-wrap">
            <button class="v-form__button" style="opacity: 0;"></button>
            <button class="v-form__button" v-text="$t('continue')"></button>
          </div>
        </Form>
      </template>
      <template v-else-if="step === 2" key="form2">
        <Form ref="form" @submit="handleContinue">

          <label for="input7" class="v-form__label" v-text="$t('brand')"></label>
          <Field id="input7" class="v-form__input-text" name="brand" type="text" :rules="validateIsEmpty"
            v-model="formValues[step].brand" />
          <ErrorMessage class="v-form__error" name="brand" />

          <label for="input8" class="v-form__label" v-text="$t('social')"></label>
          <Field id="input8" class="v-form__input-text" name="social" type="text" :rules="validateIsEmpty"
            v-model="formValues[step].social" />
          <ErrorMessage class="v-form__error" name="social" />

          <label for="input9" class="v-form__label" v-text="$t('cifnif')"></label>
          <Field id="input9" class="v-form__input-text" name="cifnif" type="text" :rules="validateIsEmpty"
            v-model="formValues[step].cifnif" />
          <ErrorMessage class="v-form__error" name="cifnif" />

          <label for="input10" class="v-form__label" v-text="$t('bizaddress')"></label>
          <Field id="input10" class="v-form__input-text" name="address_business" type="text" :rules="validateIsEmpty"
            v-model="formValues[step].address_business" />
          <ErrorMessage class="v-form__error" name="address_business" />

          <label for="input11" class="v-form__label" v-text="$t('city')"></label>
          <Field id="input11" class="v-form__input-text" name="city_business" type="text" :rules="validateIsEmpty"
            v-model="formValues[step].city_business" />
          <ErrorMessage class="v-form__error" name="city_business" />

          <label for="input12" class="v-form__label" v-text="$t('zip')"></label>
          <Field id="input12" class="v-form__input-text" name="zip_business" type="text" :rules="validateIsEmpty"
            v-model="formValues[step].zip_business" />
          <ErrorMessage class="v-form__error" name="zip_business" />

          <label for="input13" class="v-form__label" v-text="$t('mobile')"></label>
          <Field id="input13" class="v-form__input-text" name="mobile_business" type="text" :rules="validateTel"
            v-model="formValues[step].mobile_business" />
          <ErrorMessage class="v-form__error" name="mobile_business" />

          <label for="input14" class="v-form__label" v-text="$t('province')"></label>
          <Field id="input14" class="v-form__input-text" name="province_business" type="text" :rules="validateIsEmpty"
            v-model="formValues[step].province_business" />
          <ErrorMessage class="v-form__error" name="province_business" />

          <label for="input15" class="v-form__label" v-text="$t('email')"></label>
          <Field id="input15" class="v-form__input-text" name="email_business" type="email" :rules="validateEmail"
            v-model="formValues[step].email_business" />
          <ErrorMessage class="v-form__error" name="email_business" />

          <label for="input16" class="v-form__label" v-text="$t('bizsince')"></label>
          <Field id="input16" class="v-form__input-select" name="bizsince" as="select" :rules="validateIsEmpty"
            v-model="formValues[step].bizsince">
            <option value="" disabled>Selecciona</option>
            <option value="0-2">0-2</option>
            <option value="3-5">3-5</option>
            <option value="6-10">6-10</option>
            <option value="10+">10+</option>
          </Field>
          <ErrorMessage class="v-form__error" name="bizsince" />


          <div class="v-form__button-wrap">
            <button class="v-form__button v-form__button--back" @click.prevent="goBack" v-text="$t('back')"></button>
            <button class="v-form__button" v-text="$t('continue')"></button>
          </div>
        </Form>
      </template>
      <template v-else-if="step === 3" key="form3">
        <Form ref="form" @submit="handleContinue">

          <label for="input17" class="v-form__label v-form__label--title" v-text="$t('bizdesc')"></label>
          <p class="v-form__label-detail" v-text="$t('bizdesc2')"></p>
          <Field v-slot="{ field }" name="bizdesc" :rules="validateIsEmpty" v-model="formValues[step].bizdesc">
            <textarea id="input17" v-bind="field" name="bizdesc"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>
          <ErrorMessage class="v-form__error" name="bizdesc" />

          <label for="input18" class="v-form__label v-form__label--title" v-text="$t('merits')"></label>
          <p class="v-form__label-detail" v-text="$t('meritsdesc')"></p>
          <Field v-slot="{ field }" name="merits" :rules="validateIsEmpty" v-model="formValues[step].merits">
            <textarea id="input18" v-bind="field" name="merits"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>
          <ErrorMessage class="v-form__error" name="merits" />

          <p class="v-form__disclaimer" v-text="$t('careermeritsdisc')"></p>

          <label for="input19" class="v-form__label" v-text="$t('career')"></label>
          <Field v-slot="{ field }" name="career" v-model="formValues[step].career">
            <textarea id="input19" v-bind="field" name="career"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>

          <label for="input20" class="v-form__label" v-text="$t('education')"></label>
          <Field v-slot="{ field }" name="education" v-model="formValues[step].education">
            <textarea id="input20" v-bind="field" name="education"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>

          <label for="input21" class="v-form__label" v-text="$t('socialwork')"></label>
          <Field v-slot="{ field }" name="socialwork" v-model="formValues[step].socialwork">
            <textarea id="input21" v-bind="field" name="socialwork"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>

          <label for="input22" class="v-form__label" v-text="$t('awards')"></label>
          <Field v-slot="{ field }" name="awards" v-model="formValues[step].awards">
            <textarea id="input22" v-bind="field" name="awards"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>

          <label for="input23" class="v-form__label" v-text="$t('otheract')"></label>
          <Field v-slot="{ field }" name="otheract" v-model="formValues[step].otheract">
            <textarea id="input23" v-bind="field" name="otheract"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>

          <div class="v-form__button-wrap">
            <button class="v-form__button v-form__button--back" @click.prevent="goBack" v-text="$t('back')"></button>
            <button class="v-form__button" v-text="$t('continue')"></button>
          </div>
        </Form>
      </template>
      <template v-else-if="step === 4" key="form4">
        <Form ref="form" @submit="handleContinue">

          <label for="input24" class="v-form__label v-form__label--title" v-text="$t('promeritstitle')"></label>
          <p class="v-form__label-detail" v-text="$t('promeritsdesc')"></p>
          <Field v-slot="{ field }" name="promeritsdesc" :rules="validateIsEmpty"
            v-model="formValues[step].promeritsdesc">
            <textarea id="input24" v-bind="field" name="promeritsdesc"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>
          <ErrorMessage class="v-form__error" name="promeritsdesc" />

          <p class="v-form__disclaimer" v-text="$t('promeritsdisc')"></p>

          <label for="input25" class="v-form__label" v-text="$t('prostrength')"></label>
          <Field v-slot="{ field }" name="prostrength" v-model="formValues[step].prostrength">
            <textarea id="input25" v-bind="field" name="prostrength"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>

          <label for="input26" class="v-form__label" v-text="$t('proinnov')"></label>
          <Field v-slot="{ field }" name="proinnov" v-model="formValues[step].proinnov">
            <textarea id="input26" v-bind="field" name="proinnov"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>

          <label for="input27" class="v-form__label" v-text="$t('prointernationalact')"></label>
          <Field v-slot="{ field }" name="prointernationalact" v-model="formValues[step].prointernationalact">
            <textarea id="input27" v-bind="field" name="prointernationalact"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>

          <label for="input28" class="v-form__label" v-text="$t('prosustainability')"></label>
          <Field v-slot="{ field }" name="prosustainability" v-model="formValues[step].prosustainability">
            <textarea id="input28" v-bind="field" name="prosustainability"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>

          <label for="input29" class="v-form__label" v-text="$t('proinvestment')"></label>
          <Field v-slot="{ field }" name="proinvestment" v-model="formValues[step].proinvestment">
            <textarea id="input29" v-bind="field" name="proinvestment"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>

          <label for="input30" class="v-form__label" v-text="$t('prosocial')"></label>
          <Field v-slot="{ field }" name="prosocial" v-model="formValues[step].prosocial">
            <textarea id="input30" v-bind="field" name="prosocial"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>

          <label for="input31" class="v-form__label" v-text="$t('progrow')"></label>
          <Field v-slot="{ field }" name="progrow" v-model="formValues[step].progrow">
            <textarea id="input31" v-bind="field" name="progrow"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>

          <label for="input32" class="v-form__label" v-text="$t('proother')"></label>
          <Field v-slot="{ field }" name="proother" v-model="formValues[step].proother">
            <textarea id="input32" v-bind="field" name="proother"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>

          <div class="v-form__button-wrap">
            <button class="v-form__button v-form__button--back" @click.prevent="goBack" v-text="$t('back')"></button>
            <button class="v-form__button" v-text="$t('continue')"></button>
          </div>
        </Form>
      </template>

      <template v-else-if="step === 5" key="form5">
        <Form ref="form" @submit="handleContinue">
          <table style="border-collapse: collapse; width: 100%;" class="v-form__table">
            <tbody>
              <tr>
                <td style="width: 32.906%;" colspan="1" class="v-form__table-header" v-text="$t('data')"></td>
                <td style="width: 32.906%;" colspan="1" class="v-form__table-header" v-text="$t('year1')"></td>
                <td style="width: 32.906%;" colspan="1" class="v-form__table-header" v-text="$t('year2')"></td>
              </tr>
              <tr>
                <td style="width: 32.906%;" colspan="1" class="v-form__row-title" v-text="$t('billing')"></td>
                <td style="width: 32.906%;" colspan="1">
                  <Field id="input33" class="v-form__input-text v-form__input-text--units" name="billing1" type="text"
                    :rules="validateNumbers" v-model="formValues[step].billing1" />€
                  <ErrorMessage class="v-form__error" name="billing1" />
                </td>
                <td style="width: 32.906%;" colspan="1">
                  <Field id="input34" class="v-form__input-text v-form__input-text--units" name="billing2" type="text"
                    :rules="validateNumbers" v-model="formValues[step].billing2" />€
                  <ErrorMessage class="v-form__error" name="billing2" />
                </td>
              </tr>
              <tr>
                <td style="width: 32.906%;" colspan="1" class="v-form__row-title" v-text="$t('intbilling')"></td>
                <td style="width: 32.906%;" colspan="1">
                  <Field id="input35" class="v-form__input-text v-form__input-text--units" name="intbilling1" type="text"
                    :rules="validateNumbers" v-model="formValues[step].intbilling1" />€
                  <ErrorMessage class="v-form__error" name="intbilling1" />
                </td>
                <td style="width: 32.906%;" colspan="1">
                  <Field id="input36" class="v-form__input-text v-form__input-text--units" name="intbilling2" type="text"
                    :rules="validateNumbers" v-model="formValues[step].intbilling2" />€
                  <ErrorMessage class="v-form__error" name="intbilling2" />
                </td>
              </tr>
              <tr>
                <td style="width: 32.906%;" colspan="1" class="v-form__row-title" v-text="$t('profits')"></td>
                <td style="width: 32.906%;" colspan="1">
                  <Field id="input37" class="v-form__input-text v-form__input-text--units" name="profits1" type="text"
                    :rules="validateNumbers" v-model="formValues[step].profits1" />€
                  <ErrorMessage class="v-form__error" name="profits1" />
                </td>
                <td style="width: 32.906%;" colspan="1">
                  <Field id="input38" class="v-form__input-text v-form__input-text--units" name="profits2" type="text"
                    :rules="validateNumbers" v-model="formValues[step].profits2" />€
                  <ErrorMessage class="v-form__error" name="profits2" />
                </td>
              </tr>
              <tr>
                <td style="width: 32.906%;" colspan="1" class="v-form__row-title" v-text="$t('nworkers')"></td>
                <td style="width: 32.906%;" colspan="1">
                  <Field id="input39" class="v-form__input-text v-form__input-text--workers" name="nworkers1" type="text"
                    :rules="validateNumbers" v-model="formValues[step].nworkers1" />
                  <ErrorMessage class="v-form__error" name="nworkers1" />
                </td>
                <td style="width: 32.906%;" colspan="1">
                  <Field id="input40" class="v-form__input-text v-form__input-text--workers" name="nworkers2" type="text"
                    :rules="validateNumbers" v-model="formValues[step].nworkers2" />
                  <ErrorMessage class="v-form__error" name="nworkers2" />
                </td>
              </tr>
            </tbody>
          </table>

          <label for="input41" class="v-form__label v-form__label--title" v-text="$t('additionalinfo')"></label>

          <label for="input42" class="v-form__label  v-form__label--strong" v-text="$t('ruclient')"></label>
          <div class="v-form__radio-group">
            <div class="v-form__radio">
              <input id="radio-1" class="radio-custom" name="v-radio-group-1" type="radio" checked value="si"
                v-model="formValues[step].ruclient">
              <label for="radio-1" class="radio-custom-label" v-text="$t('yes')"></label>
            </div>
            <div class="v-form__radio">
              <input id="radio-2" class="radio-custom" name="v-radio-group-1" type="radio" value="no"
                v-model="formValues[step].ruclient">
              <label for="radio-2" class="radio-custom-label" v-text="$t('no')"></label>
            </div>
          </div>
          <label for="input43" class="v-form__label v-form__label--strong" v-text="$t('atassoc')"></label>
          <div class="v-form__radio-group">
            <div class="v-form__radio">
              <input id="radio-3" class="radio-custom" name="v-radio-group-2" type="radio" checked value="si"
                v-model="formValues[step].atassoc">
              <label for="radio-3" class="radio-custom-label" v-text="$t('yes')"></label>
            </div>
            <div class="v-form__radio">
              <input id="radio-4" class="radio-custom" name="v-radio-group-2" type="radio" value="no"
                v-model="formValues[step].atassoc">
              <label for="radio-4" class="radio-custom-label" v-text="$t('no')"></label>
            </div>
          </div>



          <label for="input44" class="v-form__label  v-form__label--strong" v-text="$t('observations')"></label>
          <Field v-slot="{ field }" name="observations" v-model="formValues[step].observations">
            <textarea id="input44" v-bind="field" name="observations"
              class="v-form__input-text v-form__input-text--textarea"></textarea>
          </Field>

          <div class="v-form__button-wrap">
            <button class="v-form__button v-form__button--back" @click.prevent="goBack" v-text="$t('back')"></button>
            <button class="v-form__button" v-text="$t('send')"></button>
          </div>
        </Form>
      </template>

    </transition-group>

    <!-- JSON overlay -->
    <div v-if="showJsonOverlay" class="json-overlay">
      <div class="json-overlay-content">
        <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
        <button class="close-button" @click="closeJsonOverlay">Close</button>
      </div>
    </div>

  </div>
</template>
<script>
import { ref, watch } from 'vue';
import { Form, Field, ErrorMessage, configure } from 'vee-validate';
import i18n from './i18n.js';

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  watch: {
    step() {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);
    },
  },
  data() {
    return {
      step: 1, // Current step
      selectedLanguage: 'es', // Default language is Spanish
      availableLanguages: [
      { code: 'es', name: 'Español' },
      { code: 'en', name: 'English' },
      { code: 'ca', name: 'Catalan' },
      // Add more language options if needed
    ],
      showJsonOverlay: false, // New data property
      formValues: {
        1: {
          name: '',
          dni: '',
          birth: '',
          address1: '',
          email: '',
          telephone1: '',
          terms: false,
        },
        2: {
          brand: '',
          social: '',
          cifnif: '',
          address_business: '',
          city_business: '',
          zip_business: '',
          mobile_business: '',
          province_business: '',
          email_business: '',
          bizsince: '',
        },
        3: {
          bizdesc: '',
          merits: '',
          career: '',
          education: '',
          socialwork: '',
          awards: '',
          otheract: '',
        },
        4: {
          promeritsdesc: '',
          prostrength: '',
          proinnov: '',
          prointernationalact: '',
          prosustainability: '',
          proinvestment: '',
          prosocial: '',
          progrow: '',
          proother: '',
        },
        5: {
          billing1: '',
          billing2: '',
          intbilling1: '',
          intbilling2: '',
          profits1: '',
          profits2: '',
          nworkers1: '',
          nworkers2: '',
          ruclient: '',
          atassoc: '',
          observations: ''
        },
      }, // Keep track of form values
    };
  },
  methods: {
    async handleContinue() {
      const isSuccessful = await this.$refs.form.validate();

      if (isSuccessful) {
        this.formValues[this.step] = Object.assign({}, this.formValues[this.step], this.$refs.form.values);
        if (this.step === 5) {
          this.showJsonOverlay = true;
        } else {
          this.step += 1;
        }
      }
    },
    changeLanguage(){
      this.$i18n.locale = this.selectedLanguage;
    },
    goBack() {
      // Move back to the previous step
      if (this.step > 1) {
        this.step -= 1;
      }
    },
    validateIsEmpty(value) {
      // if the field is empty
      if (!value) {
        return i18n.global.t('required');
      }
      // All is good
      return true;
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return i18n.global.t('required');
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return i18n.global.t('erremail');
      }
      // All is good
      return true;
    },
    validateDni(value) {
      // if the field is empty
      if (!value) {
        return i18n.global.t('required');
      }
      // if the field is not a valid DNI
      const regexDni = /^[0-9]{8,8}[A-Za-z]$/g;
      if (!regexDni.test(value)) {
        return i18n.global.t('errdni');
      }
      // All is good
      return true;
    },
    validateTel(value) {
      // if the field is empty
      if (!value) {
        return i18n.global.t('required');
      }
      // if the field is not a valid Tel
      const regexTel = /^(?=.*[0-9])[- +()0-9]+$/;
      if (!regexTel.test(value)) {
        return i18n.global.t('errtelephone');
      }
      // All is good
      return true;
    },
    validateTerms(value) {
      if (value) {
        return true;
      }
      return i18n.global.t('accepted');
    },
    validateNumbers(value) {
      // if the field is empty
      if (!value) {
        return i18n.global.t('required');
      }
      const numberRegex = /^[0-9]*$/;
      if (!numberRegex.test(value)) {
        return i18n.global.t('errnumber');
      }
      // All is good
      return true;
    },
    closeJsonOverlay() {
      this.showJsonOverlay = false;
    },

  },
};
</script>