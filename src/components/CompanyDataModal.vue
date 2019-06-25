<style scoped lang="scss" >
    #additional-notes-modal {
        display: flex;
        flex-direction: column;
        padding: 20px;
        width: 90%;

        #header {
            justify-content: space-between;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            margin-bottom: 15px;

            #close {
                cursor: pointer;
            }
        }

        #content {
            textarea {
                width: 100%;
            }
        }

        #submit {
            justify-content: flex-end;
            display: flex;
            flex-direction: row;
            margin-top: 10px;
        }
        
    }
</style>

<template>
    <div id="additional-notes-modal">
        <div id="header" >
            <span>ADDITIONAL NOTES</span>
            <span id="close" @click="$emit('close')" >X</span>
        </div>
        <div id="content">
            <textarea 
            placeholder="e.g. Good Tech Company" 
            name="company-name-notes" 
            id="company-name-notes" 
            cols="30" 
            rows="10"
            v-model="additionalNotes"></textarea>
            {{additionalNotes}}
        </div>
        <div id="submit">
            <button id="submit" @click="storeAdditionalNotes()">SAVE</button>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            additionalNotes: ''
        }
    },
    methods: {
        storeAdditionalNotes () {}
    },
    name: 'company-data-modal'
}
</script>
