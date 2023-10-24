<template>
  <section class="book-foerm">
    <b-container>
      <h2 class="pt-3 mb-0">{{ $t('Book Form') }}</h2>
      <form class="form-holder">
        <b-row>
          <b-col lg="6">
            <div class="form-group">
              <label for="tripDate">{{ $t('From') }}</label>
              <b-form-input v-model="reservation.from" placeholder="From"></b-form-input>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="form-group">
              <label for="reservationTo">{{ $t('To') }}</label>
              <b-form-input v-model="reservation.to" placeholder="To"></b-form-input>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <div class="form-group">
              <label for="tripDate">{{ $t('tripDate') }}</label>
              <b-form-datepicker :label-no-date-selected="`${$t('noDateSelected')}`" :locale="$i18n.locale == 'ar' ? 'ar-SA' : 'en-US'" id="tripDate" v-model="reservation.tripDate" class="mb-2"></b-form-datepicker>
            </div>
          </b-col>
          <b-col lg="6">
            <label for="tripDate">{{ $t('Ticket Class') }}</label>

            <b-form-select v-model="reservation.ticketClass" class="mb-3">
              <b-form-select-option value="null" disabled>{{ $t('Please select an option') }}</b-form-select-option>
              <b-form-select-option value="first">{{ $t('First') }}</b-form-select-option>
              <b-form-select-option value="buisness">{{ $t('Buisness') }}</b-form-select-option>
              <b-form-select-option value="economy">{{ $t('Economy') }}</b-form-select-option>
            </b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <label for="tripDate">{{ $t('Trip Type') }}</label>

            <b-form-select v-model="reservation.tripType" class="mb-3">
              <b-form-select-option value="null" disabled>{{ $t('Please select an option') }}</b-form-select-option>
              <b-form-select-option value="one-way">{{ $t('One Way') }}</b-form-select-option>
              <b-form-select-option value="round-tripe">{{ $t('Round Tripe') }}</b-form-select-option>
            </b-form-select>
          </b-col>
          <b-col lg="6">
            <div class="form-group">
              <label for="tripDate">{{ $t('Passengers') }}</label>
              <b-form-input
                v-model="reservation.passengers"
                :placeholder="$t('number of Passengers')"
                type="number"
                min="1"
              ></b-form-input>
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
        passengers: ""
      }
    };
  },
  // mounted() {
  //   if (this.$i18n.locale == "ar") {
  //     let labelTop = document.querySelector('output');;
  //     let label = document.getElementById("tripDate__value_");
  //     if (labelTop) {
  //       labelTop.textContent = "لم يتم اختيار تاريخ";
  //     }
  //     if (label) {
  //       label.textContent = "لم يتم اختيار تاريخ";
  //     }
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.form-holder {
  padding: 2% 0;
}
</style>