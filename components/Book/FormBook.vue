<template>
  <section class="book-foerm">
    <b-container>
      <form class="form-holder">
        <b-row>
          <b-col lg="6">
            <div class="form-group">
              <label for="tripDate">From</label>
              <b-form-input v-model="reservation.from" placeholder="From"></b-form-input>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="form-group">
              <label for="reservationTo">To</label>
              <b-form-input v-model="reservation.to" placeholder="To"></b-form-input>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <div class="form-group">
              <label for="tripDate">tripDate</label>
              <b-form-datepicker id="tripDate" v-model="reservation.tripDate" class="mb-2"></b-form-datepicker>
            </div>
          </b-col>
          <b-col lg="6">
            <label for="tripDate">Ticket Class</label>

            <b-form-select v-model="reservation.ticketClass" class="mb-3">
              <b-form-select-option value="null" disabled>Please select an option</b-form-select-option>
              <b-form-select-option value="first">First</b-form-select-option>
              <b-form-select-option value="buisness">Buisness</b-form-select-option>
              <b-form-select-option value="economy">Economy</b-form-select-option>
            </b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <label for="tripDate">Trip Type</label>

            <b-form-select v-model="reservation.tripType" class="mb-3">
              <b-form-select-option value="null" disabled>Please select an option</b-form-select-option>
              <b-form-select-option value="one-way">One Way</b-form-select-option>
              <b-form-select-option value="round-tripe">Round Tripe</b-form-select-option>
            </b-form-select>
          </b-col>
          <b-col lg="6">
            <div class="form-group">
              <label for="tripDate">Passengers</label>
              <b-form-input v-model="reservation.passengers" placeholder="number of Passengers" type="number" min="1"></b-form-input>
            </div>
          </b-col>
        </b-row>
      </form>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reservation: {
        from: "",
        to: "",
        tripDate: "",
        ticketClass: "",
        tripType: "",
        passengers: "",
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.form-holder {
  padding: 5% 0;
}
</style>