import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import LogoUndiksha from "@/assets/images/logo/LogoUndiksha.png";
import LogoDagoEngineering from "@/assets/images/logo/LogoDagoEng.png";
import LogoCGPDagoEng from "@/assets/images/logo/LogoCGPDagoEng.png";
import LogoDelectra from "@/assets/images/logo/LogoDelectra.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-10 sm:pt-0 gap-6 w-10/12 mx-auto">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="font-bold text-2xl lg:text-6xl text-center">
          Smart Green Garden
        </p>
        <p className="text-sm sm:text-base text-center">
          Fakultas Teknik dan Kejuruan Universitas Pendidikan Ganesha melakukan
          kerja sama kolaborasi bersama dengan PT. Dago Engineering, Bandung.
          Sebagai bentuk penggunaan teknologi, MBKM ini mengusung tema Smart
          Green Garden yang berfokus pada sektor pertanian hidroponik dan sektor
          teknologi canggih yaitu Internet of Things (IoT), Artificial
          Intelligence (AI), dan pemanfaatan Energi Terbarukan dari sinar
          matahari menggunakan panel surya.
        </p>
      </div>
      <div className="mt-2 flex flex-row sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-2 sm:gap-6 pb-4 sm:pb-6">
        <div className="flex flex-row justify-center items-center gap-2 sm:gap-6">
          <Popover placement="bottom" offset={10} showArrow>
            <PopoverTrigger>
              <div>
                <Image
                  width={80}
                  height={80}
                  style={{ height: "auto", width: 72 }}
                  className="transform hover:scale-105 transition-transform-opacity object-cover"
                  alt="Undiksha"
                  src={LogoUndiksha.src}
                  priority={true}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2 text-center">
                <div className="text-small font-bold">Undiksha</div>
                <div className="text-tiny">Fakultas Teknik dan Kejuruan</div>
                <Button
                  size="sm"
                  color="primary"
                  variant="flat"
                  className="mt-1"
                >
                  <a target="_blank" href="https://undiksha.ac.id/">
                    Kunjungi
                  </a>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          {/* <Popover placement="bottom" offset={10} showArrow>
            <PopoverTrigger>
              <div>
                <Image
                  width={172}
                  height={172}
                  style={{ height: "auto", width: 172 }}
                  className="transform hover:scale-105 transition-transform-opacity object-cover"
                  alt="PT. Dago Engineering"
                  src={LogoDagoEngineering.src}
                  priority={true}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2 text-center">
                <div className="text-small font-bold">PT. Dago Engineering</div>
                <div className="text-tiny">Bandung</div>
                <Button
                  size="sm"
                  color="primary"
                  variant="flat"
                  className="mt-1"
                >
                  <a target="_blank" href="https://dagoeng.co.id/">
                    Kunjungi
                  </a>
                </Button>
              </div>
            </PopoverContent>
          </Popover> */}
        </div>
        <div className="flex flex-row justify-center items-center gap-2 sm:gap-6">
          <Popover placement="bottom" offset={10} showArrow>
            <PopoverTrigger>
              <div>
                <Image
                  width={162}
                  height={162}
                  style={{ height: "auto", width: 162 }}
                  className="transform hover:scale-105 transition-transform-opacity object-cover"
                  alt="Clean & Green Power"
                  src={LogoCGPDagoEng.src}
                  priority={true}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2 text-center">
                <div className="text-small font-bold">Clean & Green Power</div>
                <div className="text-tiny">Bandung</div>
                <Button
                  size="sm"
                  color="primary"
                  variant="flat"
                  className="mt-1"
                >
                  <a target="_blank" href="https://dagoeng.co.id/">
                    Kunjungi
                  </a>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          <Popover placement="bottom" offset={10} showArrow>
            <PopoverTrigger>
              <div>
                <Image
                  width={238}
                  height={238}
                  style={{ height: "auto", width: 238 }}
                  className="transform hover:scale-105 transition-transform-opacity object-cover"
                  alt="Delectra"
                  src={LogoDelectra.src}
                  priority={true}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2 text-center">
                <div className="text-small font-bold">Delectra</div>
                <div className="text-tiny">Bandung</div>
                <Button
                  size="sm"
                  color="primary"
                  variant="flat"
                  className="mt-1"
                >
                  <a target="_blank" href="https://delectra.id/">
                    Kunjungi
                  </a>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 w-full lg:w-full lg:max-w-5xl lg:grid-cols-2 gap-4">
        <a
          href="https://nextgen.smartgreenovation.com/"
          className="bg-emerald-100 group rounded-xl border border-transparent px-5 py-7 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="sm:text-xl font-bold">
            Next-Gen Hydroponics{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none pl-1">
              &rarr;
            </span>
          </h2>
          <p className="text-xs sm:text-sm opacity-50 pt-1">
            Kunjungi Project Tim 1
          </p>
        </a>
        <a
          href="https://hydrohealth.smartgreenovation.com/"
          className="bg-emerald-100 group rounded-xl border border-transparent px-5 py-7 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="sm:text-xl font-bold">
            Hydrohealth Project{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none pl-1">
              &rarr;
            </span>
          </h2>
          <p className="text-xs sm:text-sm opacity-50 pt-1">
            Kunjungi Project Tim 2
          </p>
        </a>
      </div>
    </main>
  );
}
