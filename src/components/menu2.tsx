import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Dialog from '@radix-ui/react-dialog';
import { CaretDownIcon, Cross2Icon } from '@radix-ui/react-icons';

export default function Menu2() {
  return (

    <div className="mx-auto flex max-w-5xl items-center justify-between gap-20 px-5 py-4 xl:px-0 flex-row-reverse lg:flex-row">
      <a className="flex items-center gap-2" title="b³" href="/">
        <span className="text-3xl lg:text-5xl font-bold ">l³</span>
        <span className="hidden text-base font-bold lg:block">lucaseduardo</span>
      </a>
      <NavigationMenu.Root className='relative z-10 max-w-max flex-1 items-center justify-center hidden lg:block'>
        <NavigationMenu.List className='group flex flex-1 list-none items-center justify-center space-x-1'>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group font-bold">
              Sobre <CaretDownIcon className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
              <ul className='flex flex-col w-[300px] gap-3 p-4'>
                <NavigationMenu.Link className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground' title="Introduction" href="/about">
                  <div className="text-sm font-medium leading-none">Sobre Mim</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Conheça um pouco mais sobre mim e o que eu faço.</p>
                </NavigationMenu.Link>

                <NavigationMenu.Link className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground' title="Projects" href="/projects">
                  <div className="text-sm font-medium leading-none">Projetos</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Todos os projetos que venho desenvolvendo durante a minha jornada.</p>
                </NavigationMenu.Link>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group font-bold">
              Setup <CaretDownIcon className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
              <ul className='flex flex-col w-[300px] gap-3 p-4'>
                <NavigationMenu.Link className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground' title="Stack" href="/stack">
                  <div className="text-sm font-medium leading-none">Stack</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Apps e serviços que uso para construir coisas legais.</p>
                </NavigationMenu.Link>

                <NavigationMenu.Link className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground' title="Setup" href="/setup">
                  <div className="text-sm font-medium leading-none">Equipamentos</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Os principais equipamentos que utilizo em meu setup e recomendo.</p>
                </NavigationMenu.Link>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item className='font-bold'>
            <NavigationMenu.Link target='_blank' className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="https://linkedin.com/in/lucas-eduardo133">
              Linkedin
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item className='font-bold'>
            <NavigationMenu.Link target='_blank' className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="https://github.com/LucasEduardo122">
              Github
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="absolute left-0 top-full flex justify-center">
          <NavigationMenu.Viewport className="origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-layout-sidebar"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4l0 16"></path></svg>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm w-[300px]">
            <Dialog.Description className="flex flex-col space-y-2 text-center sm:text-left">
              <h2 className="text-lg font-semibold text-foreground">
                <h1 className="flex-start text-3xl lg:text-5xl font-bold ">l³</h1>
              </h2>
              <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-9"></div>
            </Dialog.Description>

            <ScrollArea.Root className="relative overflow-hidden mx-auto justify-center items-center mt-4">
              <ScrollArea.Viewport className="h-full w-full rounded-[inherit]">
                <div style={{ minWidth: "100%", display: "table" }}>
                  <ul>
                    <li>
                      <p className="text-lg font-bold">Setup</p>
                      <ul className="my-4">
                        <li className="pl-8 pb-2 text-slate-300 hover:underline hover:text-gray-400 transition-all duration-300">
                          <a href="/setup">Equipamentos</a>
                        </li>
                        <li className="pl-8 pb-2 text-slate-300 hover:underline hover:text-gray-400 transition-all duration-300">
                          <a href="/stack">Stack</a>
                        </li>
                        <li className="pl-8 pb-2 text-slate-300 hover:underline hover:text-gray-400 transition-all duration-300">
                          <a href="/wallpapers">Wallpapers</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p className="text-lg font-bold">Sobre</p>
                      <ul className="my-4">
                        <li className="pl-8 pb-2 text-slate-300 hover:underline hover:text-gray-400 transition-all duration-300">
                          <a href="/about">Sobre mim</a>
                        </li>
                        <li className="pl-8 pb-2 text-slate-300 hover:underline hover:text-gray-400 transition-all duration-300">
                          <a href="/projects">Projetos</a>
                        </li>
                        <li className="pl-8 pb-2 text-slate-300 hover:underline hover:text-gray-400 transition-all duration-300">
                          <a href="/podcasts">Podcasts</a>
                        </li>
                        <li className="pl-8 pb-2 text-slate-300 hover:underline hover:text-gray-400 transition-all duration-300">
                          <a href="/talks">Talks</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p className="text-lg font-bold">Diversos</p>
                      <ul className="my-4">
                        <li className="pl-8 pb-2 text-slate-300 hover:underline hover:text-gray-400 transition-all duration-300">
                          <a href="/shop">Loja</a>
                        </li>
                        <li className="pl-8 pb-2 text-slate-300 hover:underline hover:text-gray-400 transition-all duration-300">
                          <a href="/education">Cursos / Livros</a>
                        </li>
                        <li className="pl-8 pb-2 text-slate-300 hover:underline hover:text-gray-400 transition-all duration-300">
                          <a href="/contact">Contato</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                <ScrollArea.Thumb className="ScrollAreaThumb" />
              </ScrollArea.Scrollbar>
              <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                <ScrollArea.Thumb className="ScrollAreaThumb" />
              </ScrollArea.Scrollbar>
              <ScrollArea.Corner className="ScrollAreaCorner" />
            </ScrollArea.Root>
            <Dialog.Close asChild className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary'>
              <button className="h-4 w-4" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}