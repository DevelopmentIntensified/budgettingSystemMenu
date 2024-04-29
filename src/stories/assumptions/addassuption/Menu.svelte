<div class="w-1/2 bg-gray-800 text-white min-h-[600px] rounded">
  <div
    class="w-full text-center text-2xl bg-green-700 p-3
    "
  >
    <h1 class="font-bold">New Assumption</h1>
  </div>
  <div class="w-full p-7 h-full">
    <form
      action=""
      class="w-full h-[500px] text-center flex justify-between flex-col"
    >
      <div class="justify-between space-y-3 flex-wrap flex">
        <label class="block mb-2 text-xl" for="Assumption-name"
          >Assumption Name</label
        >
        <input
          class="w-full p-3 border rounded"
          type="text"
          placeholder="Assumption Name"
        />

        <!-- Assumption template -->
        <label class="block mb-2 text-xl" for="Assumption-template"
        >Assumption Template</label
        >
        <select
          class="w-full p-3 border rounded"
          name="Assumption-template"
          id="Assumption-template"
          value="1"
        >
          <option value="1">Default</option>
        </select>
         
        <!-- assuption type -->
        <label class="block mb-2 text-xl" for="Assumption-type"
        >Assumption Type</label
        >
        <select
          class="w-full p-3 border rounded"
          name="Assumption-type"
          id="Assumption-type"
        >
          <option value="1">Type 1</option>
        </select>

        <label class="block mb-2 text-xl" for="Assumption-value">Assumption Value</label>
        <input
          name="Assumption-value"
          class="w-full p-3 border rounded"
          type="number"
          placeholder=""
        />
      </div>

      <button
        type="submit"
        class="text-center text-lg hover:bg-orange-700 bg-orange-500 w-full h-10 text-white font-bold py-1 px-2 mb-0 block mt-auto justify-end"
        >Create</button
      >
    </form>
  </div>
</div>
