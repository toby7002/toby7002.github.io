import { createSignal } from "solid-js";

export default function () {
  return (
    <div class="w-screen h-screen">
    <div class="grid place-items-center h-full">
      <div class="card w-96 bg-neutral shadow-xl hover:scale-105 duration-300">
        <figure class="px-10 pt-10">
          <img
            src="https://avatars.githubusercontent.com/u/144540995"
            alt="avatar"
            class="rounded-full"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Nguyễn Minh Thọ (Toby)</h2>
          <p>TypeScript, PHP, Kotlin Developer</p>
          <div class="card-actions">
            <a
              href={`https://github.com/toby7002`}
              target="_blank"
              class="h-auto w-6"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
