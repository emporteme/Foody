import "../../../Styles/Blocks/Demonstration/Demonstration.css";
import css from "../../../Styles/Elements/ArrowsModule/Arrows.module.css";
import { useEffect, useState } from "react";
import React from "react";

const Demonstration = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    let windowWidth = window.screen.width;
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true">
            <section className="demo-block">
                <div className="demo-cards-group">
                    <div className="demo-card">
                        <div className="demo-card-person">
                            <svg width="382" height="372" viewBox="0 0 382 372" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M169.506 61.5831C177.811 61.5831 189.437 67.3632 169.506 90.4833C166.184 86.1649 161.534 74.3391 169.506 61.5831Z" fill="#CD8B66" />
                                <path d="M143.596 129.349V159.245L182.462 163.231C184.123 188.81 175.486 232.99 115.692 232.99C49.9195 232.99 39.2897 181.502 36.9644 159.245H88.7853V94.4691C78.1553 94.8012 64.8679 89.4863 66.861 70.5517C69.1083 49.2031 90.114 62.2471 96.7577 70.5517V46.6343C96.7577 14.7445 169.506 10.7583 169.506 46.6343V70.5517C171.898 79.3214 170.503 94.1369 169.506 100.448C167.912 119.582 151.568 127.688 143.596 129.349Z" fill="#FFC19E" />
                                <path d="M115.692 128.352C127.651 130.345 135.623 131.342 143.596 129.349V154.263C124.462 151.871 117.021 135.328 115.692 128.352Z" fill="#CD8B66" />
                                <path d="M86.7921 81.5139C87.4564 76.5312 87.7887 67.5621 75.8299 68.5586" stroke="#52270F" stroke-width="0.5" />
                                <path d="M149.575 104.435C144.592 105.099 134.428 105.033 133.63 99.4523" stroke="#262626" stroke-width="0.5" />
                                <path d="M146.586 83.5073C150.904 86.497 156.95 93.0743 146.586 95.466" stroke="#262626" stroke-width="0.5" />
                                <path d="M133.63 73.552C133.63 71.8951 132.287 70.552 130.63 70.552H128.658C127.001 70.552 125.658 71.8951 125.658 73.552V76.5313H133.63V73.552Z" fill="#262626" />
                                <path d="M161.534 73.552C161.534 71.8951 160.191 70.552 158.534 70.552H156.561C154.905 70.552 153.561 71.8951 153.561 73.552V76.5313H161.534V73.552Z" fill="#262626" />
                                <rect width="19.9311" height="3.98623" rx="1" transform="matrix(-1 0 0 1 139.61 58.5935)" fill="#52270F" />
                                <rect width="13.9518" height="3.98623" rx="1" transform="matrix(-1 0 0 1 165.52 58.5935)" fill="#52270F" />
                                <path d="M106.723 55.6037C108.317 70.7514 100.744 72.5452 96.7574 71.5486C88.7852 60.5864 78.1553 58.9254 73.8369 59.5898C65.8644 26.9028 84.4665 20.3921 94.7642 21.7208C98.7506 -11.1657 160.537 2.78616 163.527 3.78276C179.472 9.09797 187.444 27.7 184.455 40.6552C182.462 33.6793 172.496 30.6898 168.509 30.6898C171.499 31.6862 176.482 35.6725 176.482 41.6518C161.534 35.6725 167.513 41.6518 117.685 38.6623C113.367 37.9979 105.128 40.4561 106.723 55.6037Z" fill="#52270F" />
                                <path d="M241.485 275.795L179.663 169.163L177.194 246.738C177.194 246.738 228.494 336.564 241.485 323.678L314.695 241.159L349.692 241.159C368.392 234.889 374.867 213.854 372.943 206.341C354.434 199.801 335.379 194.774 326.148 196.029C330.649 191.463 334.727 184.042 331.773 178.593C300.005 194.088 286.956 206.111 291.422 224.753L241.485 275.795Z" fill="#FFC19E" />
                                <path d="M231.048 254.381C237.977 244.766 204.216 189.84 182.461 163.232C150.514 190.944 147.976 220.717 148.201 222.698C171.765 274.576 194.377 295.678 199.403 295.774C199.403 301.753 203.439 301.312 205.382 300.757C204.249 304.898 207.533 305.954 208.891 306.134C227.365 301.02 237.272 275.843 240.662 268.331C242.762 263.678 240.315 262.353 237.892 261.626C240.699 258.096 234.499 255.326 231.048 254.381Z" fill="#446B61" />
                                <path d="M125.325 163.232C125.325 145.692 127.318 141.308 88.7853 141.308V153.47L35.9678 159.246C21.6174 188.744 61.5458 274.846 51.9128 326.667H178.475C194.42 237.974 190.102 179.841 182.462 163.232L147.582 159.246V148.283H134.627V180.173C129.311 180.173 125.325 178.18 125.325 163.232Z" fill="#568679" />
                                <circle cx="117.352" cy="151.273" r="2.98967" fill="#D9D9D9" />
                                <path d="M184.455 371.512C186.049 353.176 181.133 332.647 178.475 325.671H51.9127C41.5485 342.413 37.6287 363.872 40.9505 371.512H184.455Z" fill="#656565" />
                                <path d="M48.923 328.66L179.472 328.66C182.661 331.052 181.797 335.968 181.465 337.629C151.568 343.608 120.675 339.622 45.9333 339.622C44.9374 336.632 46.9299 329.657 48.923 328.66Z" fill="#1C1C1C" />
                                <rect width="25.9105" height="17.938" rx="2" transform="matrix(-1 0 0 1 145.589 325.671)" fill="#B0B0B0" />
                                <rect width="21.9242" height="13.9518" rx="2" transform="matrix(-1 0 0 1 147.582 327.664)" fill="#1C1C1C" />
                                <path d="M64.7762 299.964C71.9514 278.438 70.7556 236.848 69.759 205.291C61.4544 228.544 47.6354 274.85 50.8243 282.026C54.0133 289.201 54.1462 313.583 53.814 324.877L64.7762 299.964Z" fill="#446B61" />
                                <path d="M3.08134 313.711C5.07445 252.921 34.9711 161.238 36.9643 159.245C62.4761 163.231 68.1897 192.131 67.8575 206.083L44.9367 292.784L95.7611 371.512H57.892L3.08134 313.711Z" fill="#FFC19E" />
                                <path d="M3.08138 266.873C-1.70209 253.32 22.6803 189.474 35.9677 159.245C61.4796 158.448 69.5185 188.146 70.8472 204.09C62.0775 251.925 56.231 271.524 52.9091 274.846C56.8954 278.035 52.2448 281.822 49.9195 282.818C53.9058 286.007 50.2517 288.798 47.9264 289.794C27.1981 293.781 9.39291 289.462 3.08138 286.805C-2.49933 285.21 0.756088 280.161 3.08138 277.836C-2.49933 272.255 0.756088 268.202 3.08138 266.873Z" fill="#568679" />
                                <rect width="46.3728" height="73.7452" rx="6" transform="matrix(-0.978148 -0.207912 -0.207912 0.978148 369.589 163.904)" fill="#BE123C" />
                                <rect width="38.904" height="64.4949" rx="6" transform="matrix(-0.978148 -0.207912 -0.207912 0.978148 364.538 167.465)" fill="white" />
                                <path d="M351.521 180.411C351.348 181.068 350.899 181.61 350.318 181.965C349.738 182.321 349.011 182.467 348.292 182.343L340.775 181.054C338.658 180.691 336.534 181.962 336.025 183.896C335.979 184.072 335.955 184.242 335.932 184.412C335.664 183.418 335.657 182.275 335.969 181.091C336.675 178.407 338.781 176.437 340.961 176.24C341.287 176.209 341.621 176.227 341.945 176.283L349.553 177.588C350.982 177.833 351.867 179.097 351.521 180.411Z" fill="#BE123C" />
                                <path d="M345.447 185.084C345.275 185.738 344.827 186.277 344.228 186.627C343.639 186.979 342.905 187.123 342.178 186.998L340.613 186.73C338.927 186.441 337.238 186.961 336.069 187.993C335.744 187.225 335.675 186.366 335.905 185.491C336.029 185.021 336.229 184.583 336.49 184.195C337.572 182.57 339.717 181.637 341.858 182.004L343.423 182.272C344.816 182.511 345.71 183.684 345.476 184.935C345.476 184.973 345.462 185.028 345.447 185.084Z" fill="#BE123C" />
                                <path d="M337.467 189.553C338.045 189.652 338.626 189.305 338.765 188.778C338.904 188.251 338.548 187.744 337.97 187.645C337.392 187.546 336.811 187.893 336.672 188.42C336.534 188.947 336.889 189.454 337.467 189.553Z" fill="#BE123C" />
                                <path d="M291.422 224.753L314.007 204.091L314.675 203.647C319.918 200.201 323.627 198.587 326.148 196.029C330.648 191.462 334.727 184.041 331.773 178.592C300.004 194.088 286.956 206.111 291.422 224.753Z" fill="#FFC19E" />
                            </svg>
                        </div>
                        <div className="demo-card-content">
                            <div className="demo-card-content-text ">
                                <span className="red-color">?????????? ???????????????????? ????????????</span> ???? ???????????????????????? ?????????????? ?? ??????????????????, ?????????????????? ???????????? ?????????? ?? ???????????????????? ????????????.
                            </div>
                            <div className="demo-card-content-arrow">
                                <img className={windowWidth > 1200 ? css.active : css.inActive} src="https://i.ibb.co/Q8xyFy9/arrow-xxl.png" alt="" />
                                <img className={windowWidth <= 1200 && windowWidth > 992 ? css.active : css.inActive} src="https://i.ibb.co/t8frKY1/Vector-8.png" alt="" />
                                <img className={windowWidth <= 992 && windowWidth > 768 ? css.active : css.inActive} src="https://i.ibb.co/d77g22B/arrow-lg.png" alt="" />
                                <img className={windowWidth <= 768 && windowWidth > 576 ? css.active : css.inActive} src="https://i.ibb.co/fSCWm6N/arrow-md.png" alt="" />
                                <img className={windowWidth <= 576 && windowWidth > 450 ? css.active : css.inActive} src="https://i.ibb.co/mqzHMNh/arrow-sm.png" alt="" />
                                <img className={windowWidth <= 450 ? css.active : css.inActive} src="https://i.ibb.co/xMhBkX0/arrow-xs.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="demo-card">
                        <div className="demo-card-person">
                            <svg width="381" height="376" viewBox="0 0 381 376" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M212.025 71.9033C203.72 71.9033 192.094 77.6833 212.025 100.803C215.347 96.4851 219.998 84.6592 212.025 71.9033Z" fill="#EDAE94" />
                                <path d="M282.5 139C253.994 140.564 221.236 146.849 210.547 139C199.859 131.151 209.297 96.2961 250.137 85.9784C290.977 75.6608 279.375 106.041 282.5 139Z" fill="#44210C" />
                                <path d="M237.762 133.83V163.727L198.897 167.713C197.236 193.292 205.873 237.472 265.666 237.472C331.439 237.472 342.069 185.984 344.394 163.727H292.573V98.951C303.203 99.2832 316.49 93.9682 314.497 75.0336C312.25 53.6851 291.244 66.729 284.601 75.0336V51.1163C284.601 19.2264 211.852 15.2403 211.852 51.1163V75.0336C209.46 83.8033 210.855 98.6188 211.852 104.93C213.446 124.064 229.79 132.17 237.762 133.83Z" fill="#FFCCB7" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M215.334 116.252C211.773 108.383 210.827 97.0503 212.267 79.5082L216.253 50.6081C225.977 15.7286 281.029 21.2827 284.774 50.9757V74.893C291.417 66.5884 312.423 53.5445 314.67 74.893C316.663 93.8276 303.376 99.1426 292.746 98.8104L291.991 99.2911C291.944 116.822 287.456 142.222 282.5 148.5L322 139C328.464 135.318 328.719 130.7 329.089 124.005C329.396 118.456 329.782 111.481 333.846 102.429C338.23 92.6661 335.389 85.2742 332.856 78.6858C330.957 73.7456 329.232 69.2571 330.857 64.5597C338.096 43.6319 307.306 20.7112 293.984 20.7112C286.012 -7.19237 234.191 -4.20271 214.26 13.7353C206.552 18.139 190.356 38.891 193.332 60.5735C194.224 67.0726 192.126 71.5578 190.07 75.9541C187.532 81.3817 185.057 86.6739 188.349 95.453C190.321 100.71 192.184 104.126 193.724 106.95C196.856 112.691 198.654 115.987 197.318 127.343C195.222 145.158 224.225 150.835 224.225 150.835C224.225 150.835 217.924 133.007 215.334 116.252Z" fill="#6C300D" />
                                <path d="M265.839 132.693C253.88 134.686 245.908 135.683 237.936 133.69V158.604C257.069 156.212 264.51 139.669 265.839 132.693Z" fill="#EDAE94" />
                                <path d="M294.739 85.8549C294.075 80.8721 293.743 71.903 305.702 72.8996" stroke="#52270F" stroke-width="0.5" />
                                <path d="M231.201 106.415C234.432 110.034 244.156 112.395 249.894 103.793" stroke="#262626" stroke-width="0.5" />
                                <path d="M236.939 85.8552C232.621 88.8449 226.575 95.4222 236.939 97.8139" stroke="#262626" stroke-width="0.5" />
                                <path d="M249.894 77.8931C249.894 76.2362 251.237 74.8931 252.894 74.8931H254.866C256.523 74.8931 257.866 76.2362 257.866 77.8931V80.8724H249.894V77.8931Z" fill="#262626" />
                                <path d="M221.99 77.8931C221.99 76.2362 223.334 74.8931 224.99 74.8931H226.963C228.62 74.8931 229.963 76.2362 229.963 77.8931V80.8724H221.99V77.8931Z" fill="#262626" />
                                <path d="M247.453 63.0525C247.54 62.6473 247.867 62.3359 248.277 62.2774C254.689 61.3626 258.46 62.2641 264.52 65.747C264.893 65.9614 265.082 66.3931 264.993 66.8139L264.745 67.9797C264.599 68.667 263.807 68.9923 263.207 68.6262C258.018 65.4579 254.342 64.7605 248.321 65.4862C247.629 65.5696 247.049 64.9531 247.194 64.2718L247.453 63.0525Z" fill="#6C300D" />
                                <path d="M218.272 67.7657C218.203 67.4289 218.312 67.0791 218.565 66.8467C222.294 63.4249 225.192 62.7154 230.611 62.9771C231.044 62.998 231.412 63.301 231.521 63.7206L231.79 64.7604C231.977 65.4862 231.326 66.1575 230.582 66.0653C226.717 65.5866 223.431 66.7038 219.97 68.9664C219.362 69.364 218.53 69.0387 218.385 68.3268L218.272 67.7657Z" fill="#6C300D" />
                                <path d="M207.284 90.4703C205.291 64.5598 234.19 29.6805 275.048 33.6665C249.139 0.780154 236.184 23.7009 222.232 23.7009C202.887 23.7009 206.664 55.0592 203.297 57.5839C195.325 63.5633 200.308 87.4806 207.284 90.4703Z" fill="#B05520" />
                                <rect x="295.231" y="92.7134" width="7.47245" height="17.438" rx="1.75" fill="#BE123C" stroke="white" stroke-width="0.5" />
                                <path d="M140.046 280.135L201.869 173.504L204.337 251.079C204.337 251.079 153.038 340.905 140.046 328.018L66.8363 245.5L31.8392 245.5C13.1396 239.23 6.66486 218.195 8.58895 210.682C27.097 204.142 46.1524 199.115 55.3836 200.37C50.8829 195.803 46.8047 188.382 49.7584 182.933C81.527 198.429 94.5757 210.452 90.1098 229.094L140.046 280.135Z" fill="#FFCCB7" />
                                <path d="M140.514 279.391C144.501 266.435 156.459 256.47 199.311 167.776L200.308 266.435C184.031 291.349 149.284 339.981 140.514 335.198C131.745 330.414 105.635 299.986 93.6763 285.37L113.607 250.491C127.559 264.442 138.189 274.74 140.514 279.391Z" fill="#86BEF1" />
                                <path d="M253.125 167.776C254.122 158.236 257.112 153.824 292.746 154.821L293.984 158.236L345.564 163.586C359.914 193.084 319.895 269.425 313.915 309.287H206.287C206.287 287.23 189.346 257.526 189.346 233.549C189.346 204.445 199.07 181.891 199.07 167.573L233.949 163.586V156.814L245.153 158.236C245.415 170.845 244.156 167.205 244.156 174.181C245.016 166.367 251.132 174.181 253.125 167.776Z" fill="#AED8FF" />
                                <circle r="1.99311" transform="matrix(-1 0 0 1 247.146 177.742)" fill="white" />
                                <circle r="1.99311" transform="matrix(-1 0 0 1 257.112 166.208)" fill="white" />
                                <circle r="1.99311" transform="matrix(-1 0 0 1 247.146 187.707)" fill="white" />
                                <path d="M186.356 375.853C184.761 357.516 203.63 314.695 206.287 307.719H313.915C324.279 324.462 343.903 368.213 340.581 375.853H186.356Z" fill="#424242" />
                                <path d="M264.087 171.191C263.091 162.648 258.108 161.226 254.122 162.794C255.118 155.246 280.032 151.26 292.988 149.267C296.974 150.264 296.974 154.675 296.974 157.239V157.24C283.022 164.215 279.036 169.198 264.087 171.191Z" fill="#86BEF1" />
                                <path d="M228.211 162.222C231.704 165.484 237.18 167.205 237.18 167.205C237.18 163.786 238.55 161.532 241.167 160.229C243.783 158.926 245.153 162.222 245.153 162.222L245.153 158.236L234.191 153.253C234.191 153.253 228.211 156.243 228.211 162.222Z" fill="#86BEF1" />
                                <path d="M378.45 318.053C376.457 257.263 346.56 165.58 344.567 163.586C319.056 167.573 313.342 196.473 313.674 210.425L336.595 297.125L285.771 375.853H323.64L378.45 318.053Z" fill="#FFCCB7" />
                                <path d="M316.905 295.336C304.149 275.405 306.939 233.549 310.926 208.635C320.227 221.923 334.335 249.635 329.86 257.467C325.874 264.443 320.891 280.388 316.905 295.336Z" fill="#86BEF1" />
                                <path d="M345.564 163.587C320.052 162.79 312.013 192.487 310.685 208.432C323.881 265.439 324.878 278.394 336.836 296.332C328.864 301.315 324.878 315.267 297.971 353.136C304.349 362.703 327.203 372.735 334.843 375.06L378.692 318.257C385.668 306.298 373.709 247.501 345.564 163.587Z" fill="#AED8FF" stroke="#86BEF1" stroke-width="0.1" />
                                <rect x="11.9421" y="168.245" width="46.3728" height="73.7452" rx="6" transform="rotate(-12 11.9421 168.245)" fill="#BE123C" />
                                <rect x="16.9937" y="171.806" width="38.904" height="64.4949" rx="6" transform="rotate(-12 16.9937 171.806)" fill="white" />
                                <path d="M46.3353 179.889C46.5081 180.546 46.3702 181.189 46.0186 181.703C45.667 182.218 45.0767 182.59 44.3574 182.714L36.8406 184.003C34.7233 184.366 33.4227 186.224 33.9315 188.158C33.9778 188.334 34.0418 188.497 34.1059 188.66C33.3608 187.84 32.7797 186.799 32.4681 185.614C31.762 182.93 32.6949 180.439 34.5875 179.543C34.8695 179.408 35.1839 179.315 35.5081 179.26L43.1161 177.955C44.5446 177.71 45.9896 178.574 46.3353 179.889Z" fill="#BE123C" />
                                <path d="M42.9819 186.233C43.1542 186.887 43.0167 187.527 42.646 188.043C42.2855 188.557 41.687 188.929 40.9599 189.054L39.3948 189.322C37.7085 189.611 36.4279 190.639 35.8803 191.965C35.1958 191.37 34.6995 190.607 34.469 189.732C34.3452 189.262 34.3071 188.797 34.3493 188.356C34.5192 186.517 36.0092 184.962 38.1499 184.595L39.715 184.327C41.1085 184.089 42.5169 184.868 42.933 186.087C42.9528 186.122 42.9673 186.177 42.9819 186.233Z" fill="#BE123C" />
                                <path d="M37.8173 193.013C38.3951 192.914 38.751 192.407 38.6121 191.88C38.4733 191.353 37.8924 191.006 37.3146 191.105C36.7367 191.204 36.3808 191.712 36.5197 192.238C36.6585 192.765 37.2394 193.112 37.8173 193.013Z" fill="#BE123C" />
                                <path d="M90.1099 229.093L67.5248 208.431L66.857 207.988C61.6132 204.542 57.9044 202.927 55.3838 200.37C50.8831 195.803 46.8049 188.382 49.7586 182.933C81.5271 198.429 94.5759 210.452 90.1099 229.093Z" fill="#FFCCB7" />
                            </svg>

                        </div>
                        <div className="demo-card-content">
                            <div className="demo-card-content-text ">
                                <span className="red-color"> ???????????????? ?????????????????? ?????????? </span>
                                {windowWidth <= 768 ? "" : <br />}
                                (?????? ????????????????????, ???????????? ??????????????)
                            </div>
                            <div className="demo-card-content-arrow">
                                <img className={windowWidth > 1200 ? css.active : css.inActive} src="https://i.ibb.co/Q8xyFy9/arrow-xxl.png" alt="" />
                                <img className={windowWidth <= 1200 && windowWidth > 992 ? css.active : css.inActive} src="https://i.ibb.co/t8frKY1/Vector-8.png" alt="" />
                                <img className={windowWidth <= 992 && windowWidth > 768 ? css.active : css.inActive} src="https://i.ibb.co/d77g22B/arrow-lg.png" alt="" />
                                <img className={windowWidth <= 768 && windowWidth > 576 ? css.active : css.inActive} src="https://i.ibb.co/fSCWm6N/arrow-md.png" alt="" />
                                <img className={windowWidth <= 576 && windowWidth > 450 ? css.active : css.inActive} src="https://i.ibb.co/mqzHMNh/arrow-sm.png" alt="" />
                                <img className={windowWidth <= 450 ? css.active : css.inActive} src="https://i.ibb.co/xMhBkX0/arrow-xs.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="demo-card">
                        <div className="demo-card-person">
                            <svg width="499" height="387" viewBox="0 0 499 387" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M169.496 61.8635C177.801 61.8635 189.427 67.6436 169.496 90.7637C166.174 86.4453 161.524 74.6195 169.496 61.8635Z" fill="#CD8B66" />
                                <path d="M143.586 129.629V159.526L182.451 163.512C184.112 189.09 175.476 233.271 115.682 233.271C49.9094 233.271 39.2795 181.782 36.9542 159.526H88.7752V94.7493C78.1452 95.0815 64.8578 89.7666 66.8509 70.832C69.0981 49.4834 90.1039 62.5273 96.7476 70.832V46.9146C96.7476 15.0247 169.496 11.0386 169.496 46.9146V70.832C171.888 79.6017 170.493 94.4171 169.496 100.729C167.902 119.863 151.558 127.968 143.586 129.629Z" fill="#FFC19E" />
                                <path d="M115.682 128.633C127.641 130.626 135.613 131.622 143.586 129.629V154.543C124.452 152.151 117.011 135.608 115.682 128.633Z" fill="#CD8B66" />
                                <path d="M86.7818 81.7943C87.4462 76.8116 87.7785 67.8425 75.8197 68.839" stroke="#52270F" stroke-width="0.5" />
                                <path d="M149.565 104.715C144.582 105.38 134.417 105.313 133.62 99.7324" stroke="#262626" stroke-width="0.5" />
                                <path d="M146.575 83.7876C150.894 86.7773 156.94 93.3545 146.575 95.7463" stroke="#262626" stroke-width="0.5" />
                                <path d="M133.62 73.8323C133.62 72.1754 132.277 70.8323 130.62 70.8323H128.648C126.991 70.8323 125.648 72.1754 125.648 73.8323V76.8116H133.62V73.8323Z" fill="#262626" />
                                <path d="M161.524 73.8323C161.524 72.1754 160.181 70.8323 158.524 70.8323H156.551C154.894 70.8323 153.551 72.1754 153.551 73.8323V76.8116H161.524V73.8323Z" fill="#262626" />
                                <rect width="19.9311" height="3.98623" rx="1" transform="matrix(-1 0 0 1 139.599 58.8738)" fill="#52270F" />
                                <rect width="13.9518" height="3.98623" rx="1" transform="matrix(-1 0 0 1 165.51 58.8738)" fill="#52270F" />
                                <path d="M106.713 55.884C108.307 71.0317 100.733 72.8255 96.7473 71.8289C88.7751 60.8666 78.1452 59.2057 73.8267 59.8701C65.8543 27.183 84.4564 20.6723 94.7541 22.0011C98.7405 -10.8854 160.527 3.06643 163.517 4.06304C179.462 9.37824 187.434 27.9803 184.445 40.9355C182.451 33.9596 172.486 30.9701 168.499 30.9701C171.489 31.9665 176.472 35.9527 176.472 41.9321C161.524 35.9527 167.503 41.9321 117.675 38.9426C113.357 38.2782 105.118 40.7364 106.713 55.884Z" fill="#52270F" />
                                <path d="M212.416 329.363L181.84 194.347L154.884 267.13C154.884 267.13 162.303 321.559 174.137 342.918L137 370.78L204.5 370.78L212.416 329.363Z" fill="#FFC19E" />
                                <path d="M125.315 163.512C125.315 145.973 127.308 141.588 88.7752 141.588V153.75L35.9577 159.526C21.6073 189.024 61.5357 275.126 51.9027 326.947H178.465C194.41 238.254 190.092 180.121 182.451 163.512L147.572 159.526V148.564H134.617V180.454C129.301 180.454 125.315 178.46 125.315 163.512Z" fill="#85909B" />
                                <circle cx="117.342" cy="151.554" r="2.98967" fill="#D9D9D9" />
                                <path d="M184.445 371.793C186.039 353.456 181.123 332.927 178.465 325.951H51.9025C41.5383 342.693 37.6185 364.152 40.9404 371.793H184.445Z" fill="#656565" />
                                <path d="M48.9129 328.941L179.461 328.941C182.65 331.333 181.787 336.249 181.455 337.91C151.558 343.889 120.665 339.903 45.9232 339.903C44.9273 336.913 46.9198 329.937 48.9129 328.941Z" fill="#1C1C1C" />
                                <rect width="25.9105" height="17.938" rx="2" transform="matrix(-1 0 0 1 145.579 325.951)" fill="#B0B0B0" />
                                <rect width="21.9242" height="13.9518" rx="2" transform="matrix(-1 0 0 1 147.572 327.944)" fill="#1C1C1C" />
                                <path d="M64.7661 300.244C71.9413 278.718 70.7454 237.128 69.7489 205.571C61.4442 228.824 47.6252 275.13 50.8142 282.306C54.0032 289.481 54.1361 313.863 53.8039 325.158L64.7661 300.244Z" fill="#6E767D" />
                                <path d="M3.07121 313.992C5.06432 253.202 34.961 161.519 36.9541 159.525C62.466 163.512 68.1796 192.412 67.8474 206.364L44.9266 293.064L95.751 371.792H57.8818L3.07121 313.992Z" fill="#FFC19E" />
                                <path d="M35.5 156.28L82.5 152.78C92.6667 166.614 111.5 219.58 105.5 320.78L96 348.28L86 352.28L49 363.78L0.999998 312.78C-3.4 264.78 22.1667 188.447 35.5 156.28Z" fill="#262626" />
                                <path d="M182.5 162.78L150.5 159.78C144.5 178.58 161.667 277.947 171 325.28L211.5 312.78L204.5 285.28C196 261.28 191 193.947 182.5 162.78Z" fill="#262626" />
                                <path d="M252.5 299.28L24 371.78H357L498.5 299.28H252.5Z" fill="#CD8B66" />
                                <path d="M54.5 283.78C61.3 270.58 67.6667 229.614 70 210.78C68.4028 229.75 77.5 254.78 91 347.78C75.8 318.18 60.3333 292.78 54.5 283.78Z" fill="#1F1F1F" />
                                <path d="M193.5 317.28L181 163.28L212.5 311.78L193.5 317.28Z" fill="#1F1F1F" />
                                <path d="M387.775 238.871C387.775 238.871 392 234.246 387.94 231.417C380.27 226.071 375.631 216.28 376.27 214.053C373.97 212.526 375.312 211.508 376.27 211.189H383.94C387.008 225.698 393.527 226.144 396.404 224.553V212.144C394.87 210.617 395.764 209.598 396.404 209.28H402.156H407.596C408.236 209.598 409.13 210.617 407.596 212.144V224.553C410.473 226.144 416.992 225.698 420.06 211.189H427.73C428.688 211.508 430.03 212.526 427.73 214.053C428.369 216.28 423.895 226.071 416.225 231.417C410 234.78 416.225 238.871 416.225 238.871C402.156 251.28 404.073 282.78 412.39 299.008C414.307 300.28 417.567 305.117 415.266 314.28H388.734C386.433 305.117 389.693 300.28 391.61 299.008C397.362 282.78 402.156 250.28 387.775 238.871Z" fill="#463D3D" />
                                <ellipse cx="402.5" cy="310.78" rx="27.5" ry="7.5" fill="#463D3D" />
                                <rect x="399.05" y="180.33" width="5.9" height="28.9" fill="#FCE8B5" stroke="#DFA50F" stroke-width="0.1" />
                                <rect x="421.05" y="182.33" width="5.9" height="28.9" fill="#FCE8B5" stroke="#DFA50F" stroke-width="0.1" />
                                <rect x="377.05" y="182.33" width="5.9" height="28.9" fill="#FCE8B5" stroke="#DFA50F" stroke-width="0.1" />
                                <path d="M401.567 164.28C397.834 175.355 398.845 179.752 400.4 180.566H403.317C405.65 177.96 405.651 174.866 401.567 164.28Z" fill="#EFC24E" />
                                <path d="M401.925 170.794C399.708 177.439 400.401 177.309 401.232 180.566H402.964C404.35 179.002 404.35 177.146 401.925 170.794Z" fill="#EF6B4E" />
                                <path d="M379.567 166.447C375.834 177.213 376.845 181.488 378.4 182.28H381.317C383.65 179.747 383.651 176.738 379.567 166.447Z" fill="#EFC24E" />
                                <path d="M379.925 172.78C377.708 179.24 378.401 179.113 379.232 182.28H380.964C382.35 180.76 382.35 178.955 379.925 172.78Z" fill="#EF6B4E" />
                                <path d="M423.567 165.995C419.834 177.069 420.845 181.466 422.4 182.28H425.317C427.65 179.675 427.651 176.58 423.567 165.995Z" fill="#EFC24E" />
                                <path d="M423.925 172.509C421.708 179.153 422.401 179.023 423.232 182.28H424.964C426.35 180.717 426.35 178.86 423.925 172.509Z" fill="#EF6B4E" />
                                <ellipse cx="264.5" cy="332.28" rx="63.5" ry="24" fill="#D9D9D9" />
                                <ellipse cx="264.5" cy="331.28" rx="52.5" ry="16" fill="#B8B8B8" />
                                <circle cx="248" cy="317.28" r="9" fill="#52270F" />
                                <circle cx="248" cy="317.28" r="9" fill="url(#paint0_linear_89_2372)" />
                                <circle cx="284" cy="322.28" r="9" fill="#52270F" />
                                <circle cx="284" cy="322.28" r="9" fill="url(#paint1_linear_89_2372)" />
                                <circle cx="261" cy="331.28" r="9" fill="#52270F" />
                                <path d="M221.258 324.724C225.137 300.815 274.997 316.697 300.52 328.182L299.02 329.682L297.52 331.182C276.32 335.982 237.686 331.182 221.02 328.182C220.958 326.93 221.041 325.779 221.258 324.724Z" fill="url(#paint2_linear_89_2372)" />
                                <path d="M300.52 328.182C273.853 316.182 220.62 299.382 221.02 328.182M300.52 328.182C273.52 318.016 219.82 303.782 221.02 328.182M300.52 328.182L299.02 329.682M221.02 328.182C237.686 331.182 276.32 335.982 297.52 331.182M221.02 328.182C226.853 322.849 250.62 315.682 299.02 329.682M221.02 328.182C243.186 327.516 289.52 327.182 297.52 331.182M297.52 331.182L299.02 329.682" stroke="#6C300D" stroke-opacity="0.3" stroke-width="0.2" />
                                <circle cx="265" cy="323.28" r="9" fill="#52270F" />
                                <circle cx="265" cy="323.28" r="9" fill="url(#paint3_linear_89_2372)" />
                                <circle cx="231" cy="328.28" r="9" fill="url(#paint4_linear_89_2372)" />
                                <path d="M306.74 332.138C302.838 303.59 252.677 322.554 227 336.267L228.509 338.058L230.018 339.849C251.346 345.58 290.213 339.849 306.98 336.267C307.042 334.771 306.958 333.397 306.74 332.138Z" fill="url(#paint5_linear_89_2372)" />
                                <path d="M227 336.267C253.828 321.939 307.383 301.88 306.98 336.267M227 336.267C254.163 324.128 308.187 307.134 306.98 336.267M227 336.267L228.509 338.058M306.98 336.267C290.213 339.849 251.346 345.58 230.018 339.849M306.98 336.267C301.112 329.899 277.201 321.342 228.509 338.058M306.98 336.267C284.68 335.471 238.067 335.073 230.018 339.849M230.018 339.849L228.509 338.058" stroke="#6C300D" stroke-opacity="0.3" stroke-width="0.2" />
                                <path d="M279 340.629C279 336.988 282.2 330.33 295 332.827C290.367 341.188 287.381 344.597 279 340.629Z" fill="#134336" />
                                <path d="M279 340.78C279.192 340.492 279.462 340.153 279.813 339.78M293.5 333.28C290.496 333.781 288.281 334.441 286.5 335.21M279.813 339.78C281.042 339.78 282.5 340.78 285.5 341.28M279.813 339.78C280.139 339.433 280.534 339.057 281 338.663M281.78 338.041C282.52 337.787 284 339.28 288.5 340.28M281.78 338.041C281.501 338.252 281.241 338.46 281 338.663M281.78 338.041C282.334 337.623 282.897 337.215 283.5 336.823M281 338.663C280.667 338.202 280.3 336.88 281.5 335.28M284 336.508C284.74 336.254 287 338.28 291.5 337.78M283.5 336.823C283.5 336.142 283.7 334.58 284.5 333.78M283.5 336.823C284.384 336.249 285.352 335.707 286.5 335.21M286.5 335.21C286.833 334.567 287.9 333.18 289.5 332.78" stroke="#36564D" stroke-width="0.1" stroke-linecap="round" />
                                <path d="M275.728 343.223C273.666 340.222 272.533 332.923 284.496 327.731C285.413 337.245 284.883 341.747 275.728 343.223Z" fill="#125845" />
                                <path d="M275.814 343.348C275.81 343.001 275.84 342.569 275.918 342.063M283.516 328.954C281.324 331.068 279.873 332.866 278.841 334.51M275.918 342.063C276.931 341.367 278.699 341.365 281.454 340.078M275.918 342.063C275.99 341.593 276.102 341.059 276.264 340.47M276.554 339.516C277.02 338.888 279.085 339.28 283.36 337.555M276.554 339.516C276.443 339.848 276.347 340.166 276.264 340.47M276.554 339.516C276.774 338.857 277.007 338.203 277.282 337.538M276.264 340.47C275.728 340.279 274.677 339.397 274.76 337.399M277.515 336.995C277.981 336.367 280.991 336.756 284.417 333.795M277.282 337.538C276.896 336.977 276.176 335.576 276.382 334.464M277.282 337.538C277.684 336.564 278.175 335.569 278.841 334.51M278.841 334.51C278.751 333.791 278.844 332.044 279.937 330.808" stroke="#568679" stroke-width="0.1" stroke-linecap="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M261.003 116.28C261.179 125.036 268.244 132.102 277 132.277V132.284C268.244 132.459 261.179 139.524 261.003 148.28H260.997C260.821 139.524 253.756 132.459 245 132.284V132.277C253.756 132.102 260.821 125.036 260.997 116.28H261.003Z" fill="#FFC83A" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M339.997 250.28H340.003C340.134 256.847 345.433 262.146 352 262.278V262.283C345.433 262.414 340.134 267.713 340.003 274.28H339.997C339.866 267.713 334.567 262.414 328 262.283V262.278C334.567 262.146 339.866 256.847 339.997 250.28Z" fill="#FFC83A" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M55.0017 116.28C55.0893 120.658 58.622 124.191 63 124.279V124.282C58.622 124.37 55.0893 127.902 55.0017 132.28H54.9983C54.9107 127.902 51.378 124.37 47 124.282V124.279C51.3779 124.191 54.9107 120.658 54.9983 116.28H55.0017Z" fill="#FFC83A" />
                                <defs>
                                    <linearGradient id="paint0_linear_89_2372" x1="248" y1="308.28" x2="248" y2="326.28" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#6E0D0D" />
                                        <stop offset="1" stop-color="#52270F" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_89_2372" x1="284" y1="313.28" x2="284" y2="331.28" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#6E0D0D" />
                                        <stop offset="1" stop-color="#52270F" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_89_2372" x1="260.76" y1="312.28" x2="260.76" y2="333.218" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFC01F" />
                                        <stop offset="1" stop-color="#EDBE45" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_89_2372" x1="265" y1="314.28" x2="265" y2="332.28" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#6E0D0D" />
                                        <stop offset="1" stop-color="#52270F" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_89_2372" x1="231" y1="319.28" x2="231" y2="337.28" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#6E0D0D" />
                                        <stop offset="1" stop-color="#52270F" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_89_2372" x1="267" y1="317.28" x2="267" y2="342.28" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFC01F" />
                                        <stop offset="1" stop-color="#EDBE45" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                        <div className="demo-card-content">
                            <div className="demo-card-content-text">
                                {windowWidth <= 450 && windowWidth > 320 ? "" : <br />} ?????????? ?????????????????? ?? ???????????????? ?? <br />???????????????? <span className="red-color">???????????????? ??????????.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export default Demonstration;