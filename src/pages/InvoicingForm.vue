<template>
  <form action="#">
    <div class="row">
      <div class="form-group col-sm-12 col-md-6">
        <label for="client">Projet</label>
        <select name="client" id="client" class="form-control">
          <option>-</option>
          <option>Projet 1</option>
          <option>Projet 2</option>
          <option>Projet 3</option>
        </select>
        <p><a href="#">Créer un nouveau projet</a></p>
      </div>
      <div class="col-sm-12 col-md-6">
        <h4>Période de facturation</h4>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">De</span>
              </div>
              <input
                type="date"
                name="clientName"
                id="clientName"
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-6 col-sm-12 mt-3 mt-lg-0">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">A</span>
              </div>
              <input
                type="date"
                name="clientName"
                id="clientName"
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                class="form-control"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h4>Liste des services</h4>
    <div class="row">
      <div class="form-group col-md-3 col-sm-12">
        <label for="serviceName">Nom du service</label>
        <input type="text" name="serviceName" class="form-control" />
      </div>
      <div class="form-group col-md-3 col-sm-12">
        <label for="serviceQuantity">Quantité</label>
        <input type="number" name="serviceQuantity" class="form-control" />
      </div>
      <div class="form-group col-6 col-md-2">
        <label for="serviceUnit">Unité</label>
        <input type="text" name="serviceUnit" class="form-control" />
      </div>
      <div class="form-group col-6 col-md-2">
        <label for="servicePrice">Prix / Unité</label>
        <input type="number" name="servicePrice" class="form-control" />
      </div>
      <div class="col-12 col-md-2 my-auto">
        <button class="btn btn-outline-danger btn-block">
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            class="bi bi-x"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 center-align mt-3">
        <button type="button" class="btn btn-primary btn-block">
          <span>
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              class="bi bi-plus"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
          </span>
          SERVICE
        </button>
      </div>
    </div>

    <div class="row">
      <div class="form-group col-sm-12 col-md-12mt-3">
        <label for="specialMention">Mention(s) spéciale(s)</label>
        <textarea class="form-control" id="specialMention" rows="3"></textarea>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 center-align mt-5">
        <button
          type="submit"
          class="btn btn-success btn-block fixed-bottom d-md-none"
        >
          <i class="fas fa-plus"></i> Ajouter
        </button>

        <button type="submit" class="btn btn-success d-none d-md-block">
          <i class="fas fa-plus"></i> Ajouter
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {},
};
</script>