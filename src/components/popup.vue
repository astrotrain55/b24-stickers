<template>
    <v-dialog v-model="open" persistent :max-width="width">
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <slot/>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="blue darken-1" text @click="successFunction">{{ successText }}</v-btn>
          <v-btn color="red darken-1" text @click="$emit('popup:close')">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ['open', 'width', 'successFunction', 'successText'],
};
</script>
