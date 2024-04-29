<script>
  import * as falso from "@ngneat/falso";
  let Assumptions = [];
  for (let i = 0; i < 10; i++) {
    Assumptions.push(falso.randWord());
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
    <h1 class="font-bold">Edit Scenario's Assumptions</h1>
  </div>
  <div class="w-full p-7 h-full">
    <form
      action=""
      class="w-full h-96 text-center flex justify-between flex-col"
    >
      <div class="justify-normal space-y-3">
        <label class="block mb-2 text-xl" for="Assumption-name"
          >Search for by Assumption Name</label
        >
        <input
          class="w-full p-3 border rounded"
          type="text"
          placeholder="Search"
        />

        <div class="scrollbar w-full h-56 overflow-auto p-3">
          {#each Assumptions as Assumption}
            <div class="block p-2 text-center text-xl border border-gray-700">
              {Assumption}
              <div class="float-right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-blue-600 inline">
  <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
</svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-red-600 inline">
  <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
</svg>

              </div>

            </div>

          {/each}
        </div>

        <!-- <label class="block mb-2 text-xl" for="Assumption-template" -->
        <!--   >Assumption Template</label -->
        <!-- > -->
        <!-- <select -->
        <!--   class="w-full p-3 border rounded" -->
        <!--   name="Assumption-template" -->
        <!--   id="Assumption-template" -->
        <!-- > -->
        <!--   <option value="1">Template 1</option> -->
        <!-- </select> -->
      </div>

      <button
        type="submit"
        class="text-center text-lg hover:bg-orange-700 bg-orange-600 w-full h-10 text-white font-bold py-1 px-2 mb-0 block mt-auto justify-end"
        >Save</button
      >
    </form>
  </div>
</div>
