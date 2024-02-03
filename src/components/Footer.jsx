import React from "react";

function Footer() {
    let date = new Date();
    return (
        <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    {`${date.getFullYear()} `}
                    <a
                        href="https://www.instagram.com/prabeen_ragupathi/"
                        target="_blank"
                        class="hover:underline">
                        Crafted by Prabeen
                    </a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
