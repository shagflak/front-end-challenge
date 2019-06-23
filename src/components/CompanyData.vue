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
                color: #e8c2c2;
                font-weight: bold;

                label {
                    margin: 6px 0;
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
                    <label for="company-name">COMPANY DATA</label>
                    <input type="text" 
                           name="company-name" 
                           id="company-name" 
                           placeholder="e.g. Your Company Name">
                </li>
                <li class="company-data-form-field" >
                    <label for="company-spend">COMPANY SPEND</label>
                    <input type="text" 
                           name="company-spend" 
                           id="company-spend" 
                           placeholder="e.g. $150,000">
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
                    rows="10"></textarea>
                </li>
                <li class="company-data-form-field" ></li>
            </ul>
        </div>
    </div>
</template>



<script>
export default {
    data () {},
    name: 'company-data'
}
</script>
