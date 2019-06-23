<style lang="scss" >
@import '../styles/variables';

#side-bar-menu {

    #sbm-container {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      list-style-type: none;
      padding-left: 0;

      .sbm-item {  
        padding: 10px;
        cursor: pointer;
        border-left: 1px solid #e8c2c2;
        border-right: 1px solid #e8c2c2;

        &:first-child {
          border-top: none;
          border-radius: 5px 5px 0 0;
          border-top: 1px solid #e8c2c2;
        }

        &:last-child {
          border-radius: 0 0 5px 5px;
          border-bottom: 1px solid #e8c2c2;
        }

        &.sbm-item-active {
          border-left: 3px solid $primary-deep;
          background-color: #FAFBFC;
          font-weight: bold;
        }
      }

    }
}
</style>

<template>
<div id="side-bar-menu" >

    <ul id="sbm-container" >
        <li class="sbm-item sbm-item-active" >
            Company Data
        </li>
        <li class="sbm-item" >
            Company Page
        </li>
    </ul>

</div>
</template>

<script>
export default {
    data () {},
    name: 'side-bar-menu'
};
</script>
