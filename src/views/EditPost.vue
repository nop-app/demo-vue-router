<template>
  <div>
    <h1 class="title has-text-centered">Edit post {{ $route.params.id }}</h1>

    <div class="columns">
      <div class="column is-half">
        <b-field label="Title">
          <b-input v-model="title"></b-input>
        </b-field>
      </div>
      <div class="column is-half">
        <b-field label="Author">
          <b-input v-model="author"></b-input>
        </b-field>
      </div>
    </div>

    <b-field>
      <b-input type="textarea" rows="10" v-model="content"></b-input>
    </b-field>

    <div class="has-text-centered mt-6">
      <b-button type="is-primary" size="is-medium">Update</b-button>
    </div>
  </div>
</template>

<script>
import faker from 'faker'

export default {
  data() {
    return {
      title: faker.lorem.sentence(),
      author: `${faker.name.firstName()} ${faker.name.lastName()}`,
      content: faker.lorem.paragraphs(4),
    }
  }
}
</script>
