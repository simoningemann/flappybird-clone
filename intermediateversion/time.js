class Time {

    static #lastFrame;
    static #currentFrame;
    static sinceLastFrame;

    static update(){
        Time.#currentFrame = new Date().getTime();
        Time.sinceLastFrame = Time.#currentFrame - Time.#lastFrame;
        Time.#lastFrame = Time.#currentFrame;
    }

}