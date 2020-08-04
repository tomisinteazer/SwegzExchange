<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Add Products</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-file-input
              v-model="image"
              :rules="[v => !!v || 'image  is required']"
              label="Product image"
              prepend-icon="mdi-camera"
              required
            ></v-file-input>

            <v-text-field
              v-model="tittle"
              prepend-icon="mdi-chart-bubble"
              :rules="nameRules"
              label="Product Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="description"
              :rules="nameRules"
              prepend-icon="mdi-information-outline"
              label="Product Description"
              required
            ></v-text-field>

            <v-text-field
              prepend-icon="mdi-wallet"
              label="Product price"
              v-model="price"
              :rules="[v => !!v || 'image  is required']"
              required
              type="number"
            ></v-text-field>
            <v-text-field
              prepend-icon="mdi-information-variant"
              label="Product full information"
              v-model="information"
              :rules="nameRules"
              required
            ></v-text-field>

            <v-select
              v-model="category"
              :items="items"
              :rules="[v => !!v || 'category  is required']"
              label="Category"
              required
              prepend-icon="mdi-format-list-bulleted-type"
            ></v-select>
            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="are you done?"
              required
            ></v-checkbox>

            <v-btn color="success" class="mr-4" @click="validate" :disabled="!valid">Validate</v-btn>

            <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

            <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Delete products</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Product Name</th>
                  <th class="text-left">Product Price</th>
                  <th class="text-left">delete Product</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in savedProducts" :key="item.id">
                  <td>{{ item.tittle }}</td>
                  <td>{{ item.price}}</td>
                  <td>
                    <v-btn color="error" @click="deleteItem(item)">Delete item</v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    tittle: "",
    image: null,
    description: "",
    information: "",
    category: null,
    src: null,
    price: null,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length >= 5) || "Name greater than 5 characters",
    ],
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    savedProducts: [],
    Product: null,
    currentProduct: null,
  }),

  methods: {
    addProduct() {
      if (this.image) {
        let file = this.image;
        var storageRef = this.$fireStorage.ref(
          "products/" + Math.random() + "_" + file.name
        );
        let uploadTask = storageRef.put(file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            alert(error); // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref
              .getDownloadURL()
              .then((downloadURL) => {
                this.src = downloadURL;
                this.Product = {
                  price: this.price * 1,
                  description: this.description,
                  information: this.information,
                  category: this.category,
                  tittle: this.tittle,
                  src: this.src,
                };
                console.log(this.Product);
              })
              .then(() => {
                this.$fireStore
                  .collection("products")
                  .add(this.Product)
                  .then((e) => alert(" document sent" + e.id))
                  .catch((e) => console.log(e));
              })
              .catch((e) => alert(e));
          }
        );
      }
    },
    validate() {
      this.$refs.form.validate();
      this.addProduct();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    deleteItem(doc) {
      this.$fireStore
        .collection("products")
        .doc(doc.id)
        .delete()
        .then(() => {
          console.log("deleted succesfully");
        })
        .catch((e) => console.log(e));
      this.$fireStorage
        .refFromURL(doc.src)
        .delete()
        .then(function () {
          console.log("image deleted");
        })
        .catch(function (error) {
          // Uh-oh, an error occurred!
          console.log("an error occurred");
        });
    },
  },
  async beforeMount() {
    try {
      await this.$store.dispatch("bindProducts");
    } catch (e) {
      console.log(e);
    }
    this.savedProducts = this.$store.getters.getProduct;
  },
};
</script>