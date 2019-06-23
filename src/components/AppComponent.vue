<style lang="scss" >
@import '../styles/main';

#main-wrapper {
  margin: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: stretch;

  .left-column {
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    width: 25%;
    padding: 20px;

    display: flex;
    flex-direction: column;
  }

  .right-column {
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    width: 75%;
    padding: 20px;
    
    display: flex;
    flex-direction: column;
  }

}

</style>

<template>

  <div id="main-wrapper" >

    <div class="left-column">
        <side-bar-menu></side-bar-menu>
    </div>
    
    <div class="right-column">
        <company-data></company-data>
    </div>

  </div>

</template>

<script>
import SideBarMenu from './SideBarMenu';
import CompanyData from './CompanyData';

export default {
  components: {
    SideBarMenu,
    CompanyData
  },
  data () {}
};
</script>
