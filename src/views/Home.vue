<template>
  <div>
    <h1 class="title has-text-centered">Posts</h1>

    <b-table
      :data="data"
      hoverable>

      <b-table-column field="id" label="ID" sortable v-slot="props">
        {{ props.row.id }}
      </b-table-column>
      <b-table-column field="title" label="Title" sortable v-slot="props">
        <router-link :to="`/posts/${props.row.id}`">
          {{ props.row.title }}
        </router-link>
      </b-table-column>
      <b-table-column field="author" label="Author" sortable v-slot="props">
        {{ props.row.author }}
      </b-table-column>
      <b-table-column v-slot="props">
        <div class="is-flex justify-end">
          <router-link :to="`/posts/${props.row.id}`">
            <b-button type="is-primary is-light">Edit</b-button>
          </router-link>
        </div>
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
import faker from 'faker'

export default {
  data() {
    const data = Array.from({ length: 10 }, (x, i) => ({
      id: i + 1,
      title: faker.lorem.sentence(),
      author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    }))

    return {
      data,
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true
        },
        {
          field: 'title',
          label: 'Title',
        },
        {
          field: 'author',
          label: 'Author',
        },
      ],
    }
  }
}
</script>
