<script>
  import * as falso from "@ngneat/falso";
  let scenarios = [];
  for (let i = 0; i < 10; i++) {
    scenarios.push(falso.randWord());
  }
</script>

<style>
  .scrollbar::-webkit-scrollbar {
    width: 10px;
    height: 10px;
      /* dark grey track */
  }

  .scrollbar::-webkit-scrollbar-track {
      /* dark grey track */
    background: grey;
    color: #f5f5f5;
  }

  .scrollbar::-webkit-scrollbar-thumb {
    background: #000000;
  }

  .scrollbar::-webkit-scrollbar-thumb:hover {
    background: #c0a0b9;
  }
</style>

<div class="w-1/2 bg-gray-800 text-white min-h-96 rounded">
  <div
    class="w-full text-center text-2xl bg-green-700 p-3
    "
  >
    <h1 class="font-bold">Delete Scenario</h1>
  </div>
  <div class="w-full p-7 h-full">
    <form
      action=""
      class="w-full h-96 text-center flex justify-between flex-col"
    >
      <div class="justify-normal space-y-3">
        <label class="block mb-2 text-xl" for="scenario-name"
          >Search for Scenario Name</label
        >
        <input
          class="w-full p-3 border rounded"
          type="text"
          placeholder="Search"
        />

        <div class="scrollbar w-full h-56 overflow-auto p-3">
          {#each scenarios as scenario}
            <div class="block p-2 text-center text-xl border border-gray-700">
              <input class="float-left h-6 w-5" type="checkbox" />
              {scenario}</div>
          {/each}
        </div>

        <!-- <label class="block mb-2 text-xl" for="scenario-template" -->
        <!--   >Scenario Template</label -->
        <!-- > -->
        <!-- <select -->
        <!--   class="w-full p-3 border rounded" -->
        <!--   name="scenario-template" -->
        <!--   id="scenario-template" -->
        <!-- > -->
        <!--   <option value="1">Template 1</option> -->
        <!-- </select> -->
      </div>

      <button
        type="submit"
        class="text-center text-lg hover:bg-orange-700 bg-orange-600 w-full h-10 text-white font-bold py-1 px-2 mb-0 block mt-auto justify-end"
        >Delete</button
      >
    </form>
  </div>
</div>
