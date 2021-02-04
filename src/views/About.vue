<template>
  <div>
    <h1>You can also add original pages</h1>
    <div>
      Without going through wordpress!<br/>
      You should add metaInfo() for users to know which page they are in now.
    </div>
  </div>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'About',
    }
  },
};
</script>
