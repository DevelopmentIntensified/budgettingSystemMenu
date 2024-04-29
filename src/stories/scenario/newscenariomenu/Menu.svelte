<div class="w-full bg-gray-800 text-white min-h-[600px] rounded">
  <div
    class="w-full text-center text-2xl bg-green-700 p-3
    "
  >
    <h1 class="font-bold">New Scenario</h1>
  </div>
  <div class="w-full p-7 h-full">
    <form
      action=""
      class="w-full h-[500px] text-center flex justify-between flex-col"
    >
      <div class="justify-between space-y-3 flex-wrap flex">
        <label class="block mb-2 text-xl" for="scenario-name"
          >Scenario Name</label
        >
        <input
          class="w-full p-3 border rounded"
          type="text"
          placeholder="Scenario Name"
        />

        <!-- scenario template -->
        <label class="block mb-2 text-xl" for="scenario-template"
        >Scenario Template</label
        >
        <select
          class="w-full p-3 border rounded"
          name="scenario-template"
          id="scenario-template"
        >
          <option value="1">Template 1</option>
        </select>

        <div class="w-full h-7"></div>

        <!-- years -->
        <label class="block p-3 mb-2 text-xl" for="years">Years</label>
        <input
          class=" w-1/4
          p-3 border rounded"
          type="number"
          value="3"
          placeholder="3"
        />

        <!-- currently employed employees -->
        <label class="block p-3 mb-2 text-xl" for="employees"
          >Currently Employed</label
        >
        <input
          class="w-1/4 p-3 border rounded"
          type="number"
          placeholder=""
        />

        <label class="block p-2 text-xl" for="salary"
          >Employee Salaries</label
        >
        <input
          class="w-1/4 p-3 border rounded"
          type="number"
          placeholder=""
        />

        <label class="block p-3 mb-2 text-xl" for="tax-rate"
          >Current Tax Rate</label>
        <input
          class="w-1/4 p-3 border rounded"
          type="number"
          placeholder=""
        />

        <div class="justify-normal w-full text-left text-nowrap">
        <!-- year to date balance -->
        <label class="p-3 mb-2 text-xl" for="balance"
          >Year to Date Balance</label>
        <input
          class="w-1/3 p-3 border rounded"
          type="number"
          placeholder=""
        />
        </div>


      </div>

      <button
        type="submit"
        class="text-center text-lg hover:bg-orange-700 bg-orange-500 w-full h-10 text-white font-bold py-1 px-2 mb-0 block mt-auto justify-end"
        >Create</button
      >
    </form>
  </div>
</div>
