<style lang="scss" >
#company-data {
    border: 1px solid #e8c2c2;
    padding: 15px 25px;
    margin-top: 20px;

    #form-container {

        ul#company-data-form {
            display: flex;
            flex-direction: column;
            list-style-type: none;
            padding-left: 0;

            .company-data-form-field {
                padding: 10px;
                display: flex;
                flex-direction: column;
                font-weight: bold;

                label.form-field-label {
                    color: #e8c2c2;
                    margin: 6px 0;

                    &.form-field-error-label {
                        color: #f57f6c;
                    }
                }

                input {
                    padding: 15px;
                    border-radius: 5px;
                    border: 1px solid #e8c2c2;
                }

                textarea {
                    padding: 15px;
                    border-radius: 5px;
                    border: 1px solid #e8c2c2;
                }

                .form-error {
                    color: #f57f6c;
                    font-size: 12px;
                    margin-top: 7px;
                }
            }
        }

    }
}
</style>


<template>
    <div id="company-data">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. 
        </p>
        <div id="form-container">
            <ul id="company-data-form" >
                <li class="company-data-form-field" >
                    <label for="company-name" v-bind:class="{ 'form-field-label': true, 'form-field-error-label': (!$v.companyName.required || !$v.companyName.minLength) }" >
                        COMPANY DATA
                    </label>
                    <input type="text" 
                           name="company-name" 
                           id="company-name" 
                           v-model.trim="companyName"
                           placeholder="e.g. Your Company Name">
                    <span class="form-error" v-if="!$v.companyName.required" >This field is required</span>
                    <span class="form-error" v-if="!$v.companyName.minLength" >At least 4 characters-</span>
                </li>
                <li class="company-data-form-field" >
                    <label for="company-spend" class='form-field-label'>COMPANY SPEND</label>
                    <input type="text" 
                           name="company-spend" 
                           id="company-spend" 
                           v-model.trim="companySpend"
                           placeholder="e.g. $150,000"
                           @blur="formatCurrency()"
                           @focus="unformatCurrency()"
                           v-numericOnly>
                </li>
                <li class="company-data-form-field" >
                    <label for="company-spend">COMPANY SPEND ABILITY</label>
                    <input type="text" 
                           name="company-spend-ability" 
                           id="company-spend-ability"
                           placeholder="e.g. $150,000 - $330,000">
                </li>
                <li class="company-data-form-field" >
                    <label>NOTES</label>
                    <textarea 
                    placeholder="e.g. Good Tech Company" 
                    name="company-name-notes" 
                    id="company-name-notes" 
                    cols="30" 
                    rows="10"
                    v-on:click="displayTextAreaModal(isDisplayed = true)"></textarea>
                </li>
                <li class="company-data-form-field" ></li>
            </ul>
        </div>
    </div>
</template>



<script>
import { required, minLength, between, numeric } from 'vuelidate/lib/validators';
import CompanyDataModal from './CompanyDataModal';

export default {
    components: {
        CompanyDataModal
    },
    data () {
        return {
            //FORM PROPS
            companyName: '',
            companySpend: null,
            companySpendRaw: null,
            companySpendFormated: null,
            // OTHER COMPONENT PROPS
            isDisplayed: false
        }
    },
    methods: {
        formatCurrency () {
            this.companySpendRaw = this.$data.companySpend;
            let val = (this.$data.companySpendRaw/1).toFixed(2).replace('.', ',')
            this.$data.companySpendFormated = '$ ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            this.$data.companySpend = this.companySpendFormated;
        },
        unformatCurrency () {
            this.$data.companySpend = this.$data.companySpendRaw;
        },
        displayTextAreaModal (isDisplayed) {
            this.$modal.show(CompanyDataModal, {
                draggable: true
            });
        }
    },
    validations: {
        companyName: {
            required,
            minLength: minLength(4),
        }
    },
    name: 'company-data'
}
</script>
