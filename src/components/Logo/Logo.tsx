import { HTMLAttributes } from 'react'

export type LogoProps = HTMLAttributes<SVGElement> & {
  size?: number
}

export function Logo({ size = 124, ...props }: LogoProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill="none"
      viewBox="0 0 248 42"
    >
      <path
        fill="#8C8A97"
        d="M98.135 24.245c0-.5-.079-.95-.236-1.348-.145-.41-.42-.783-.828-1.117-.407-.347-.978-.687-1.714-1.02-.735-.335-1.688-.681-2.856-1.04-1.3-.412-2.535-.874-3.704-1.387a15.294 15.294 0 01-3.073-1.792 8.122 8.122 0 01-2.089-2.407c-.499-.912-.749-1.971-.749-3.178 0-1.169.263-2.228.789-3.178.525-.963 1.26-1.785 2.206-2.465.946-.694 2.062-1.226 3.35-1.599 1.3-.372 2.725-.558 4.274-.558 2.115 0 3.96.372 5.536 1.117 1.576.744 2.798 1.765 3.665 3.062.88 1.297 1.32 2.78 1.32 4.45h-5.871c0-.823-.178-1.542-.532-2.158-.342-.63-.867-1.124-1.576-1.483-.696-.36-1.576-.54-2.64-.54-1.025 0-1.878.155-2.561.463-.683.295-1.196.7-1.537 1.213a2.939 2.939 0 00-.512 1.695c0 .475.118.905.354 1.29.25.386.618.745 1.104 1.08.486.333 1.083.648 1.792.943.71.295 1.53.584 2.463.867 1.563.462 2.935.982 4.117 1.56 1.196.577 2.194 1.226 2.995 1.945.801.719 1.405 1.534 1.813 2.446.407.912.61 1.945.61 3.1 0 1.22-.243 2.312-.729 3.275a6.76 6.76 0 01-2.108 2.446c-.919.668-2.016 1.175-3.29 1.522-1.274.346-2.699.52-4.275.52-1.418 0-2.817-.18-4.196-.54a12.887 12.887 0 01-3.763-1.675 8.522 8.522 0 01-2.68-2.85C82.335 25.747 82 24.38 82 22.8h5.93c0 .873.138 1.611.414 2.215a3.714 3.714 0 001.162 1.464c.512.372 1.116.642 1.813.808.709.167 1.484.25 2.324.25 1.025 0 1.865-.14 2.522-.423.67-.282 1.162-.674 1.477-1.175.329-.5.493-1.066.493-1.695zM114.034 29.234l5.654-18.49h6.087l-8.57 23.979a12.742 12.742 0 01-.748 1.695 6.875 6.875 0 01-1.241 1.714c-.513.552-1.163 1.001-1.951 1.348-.775.347-1.727.52-2.856.52-.539 0-.979-.032-1.32-.096a23.704 23.704 0 01-1.222-.27V35.57h.453c.158.013.309.02.453.02.749 0 1.36-.084 1.833-.25a2.561 2.561 0 001.142-.771c.289-.334.519-.77.69-1.31l1.596-4.025zm-2.365-18.49l4.63 15.1.808 5.874-3.861.405-7.664-21.379h6.087zM133.596 15.193v16.39h-5.673V10.744h5.319l.354 4.45zm-.827 5.239h-1.537c0-1.541.204-2.928.611-4.16.407-1.246.979-2.305 1.714-3.178a7.346 7.346 0 012.62-2.022c1.025-.476 2.167-.713 3.428-.713.998 0 1.911.141 2.739.424a5.252 5.252 0 012.127 1.348c.605.616 1.064 1.431 1.379 2.446.329 1.014.493 2.253.493 3.717v13.29h-5.713v-13.31c0-.924-.132-1.643-.394-2.156a2.192 2.192 0 00-1.163-1.079c-.499-.218-1.116-.327-1.852-.327-.761 0-1.425.147-1.989.443a3.913 3.913 0 00-1.379 1.232 5.747 5.747 0 00-.808 1.81 8.683 8.683 0 00-.276 2.235zM159.464 27.635c.696 0 1.313-.128 1.852-.385.538-.27.958-.642 1.26-1.117.316-.488.48-1.06.493-1.714h5.339c-.013 1.463-.414 2.767-1.202 3.91-.788 1.13-1.845 2.022-3.172 2.677-1.326.642-2.81.963-4.452.963-1.655 0-3.1-.27-4.334-.81-1.222-.539-2.24-1.283-3.054-2.233a9.723 9.723 0 01-1.832-3.352c-.407-1.284-.611-2.658-.611-4.121v-.559c0-1.476.204-2.85.611-4.122.407-1.284 1.018-2.4 1.832-3.35.814-.964 1.832-1.715 3.054-2.254 1.221-.54 2.653-.81 4.295-.81 1.746 0 3.276.328 4.59.983 1.326.655 2.364 1.592 3.113 2.812.761 1.207 1.149 2.639 1.162 4.295h-5.339a4.263 4.263 0 00-.453-1.887 3.218 3.218 0 00-1.222-1.349c-.525-.346-1.175-.52-1.95-.52-.827 0-1.504.174-2.029.52a3.34 3.34 0 00-1.222 1.387c-.289.578-.492 1.24-.61 1.984a16.272 16.272 0 00-.158 2.311v.559c0 .809.053 1.585.158 2.33.105.745.302 1.406.591 1.984a3.507 3.507 0 001.241 1.367c.525.334 1.208.501 2.049.501zM177.234 2v29.583h-5.674V2h5.674zm-.808 18.432h-1.556c.013-1.451.21-2.787.591-4.006.381-1.233.926-2.299 1.635-3.197a7.5 7.5 0 012.541-2.119c.999-.5 2.102-.751 3.31-.751 1.051 0 2.003.148 2.857.443a5.324 5.324 0 012.226 1.386c.63.63 1.116 1.458 1.458 2.485.341 1.027.512 2.273.512 3.737v13.173h-5.713V18.371c0-.924-.138-1.65-.414-2.176-.263-.54-.65-.918-1.162-1.137-.499-.23-1.117-.346-1.852-.346-.814 0-1.511.147-2.088.443a3.559 3.559 0 00-1.36 1.232c-.341.514-.591 1.117-.748 1.81a10.04 10.04 0 00-.237 2.235z"
      ></path>
      <path
        fill="#FBAB34"
        d="M17.346 22.13h5.841c-.117 1.924-.645 3.63-1.582 5.122-.925 1.491-2.22 2.655-3.887 3.492C16.064 31.581 14.07 32 11.74 32c-1.823 0-3.458-.314-4.903-.942a10.436 10.436 0 01-3.712-2.747c-1.015-1.19-1.79-2.629-2.324-4.316C.267 22.307 0 20.417 0 18.325v-1.982c0-2.093.273-3.983.82-5.67.56-1.701 1.355-3.147 2.384-4.337a10.623 10.623 0 013.73-2.747c1.446-.64 3.061-.961 4.845-.961 2.37 0 4.37.432 5.997 1.295 1.641.863 2.91 2.053 3.81 3.57.91 1.518 1.458 3.245 1.64 5.18h-5.86c-.065-1.15-.293-2.125-.684-2.923a3.888 3.888 0 00-1.777-1.825c-.782-.418-1.824-.627-3.126-.627-.977 0-1.83.183-2.559.549-.73.366-1.341.922-1.836 1.668-.495.745-.866 1.687-1.114 2.825-.234 1.125-.351 2.446-.351 3.963v2.021c0 1.478.11 2.78.332 3.905.221 1.112.56 2.053 1.016 2.825.469.759 1.068 1.335 1.797 1.727.742.38 1.634.569 2.676.569 1.224 0 2.233-.196 3.028-.589a4.055 4.055 0 001.816-1.746c.43-.772.684-1.733.762-2.884zM25.785 21.209v-.412c0-1.557.221-2.99.664-4.297.443-1.322 1.088-2.466 1.934-3.434.847-.968 1.889-1.72 3.126-2.256 1.237-.55 2.656-.824 4.258-.824 1.602 0 3.028.274 4.278.824 1.25.536 2.299 1.288 3.145 2.256.86.968 1.51 2.112 1.954 3.434.442 1.308.664 2.74.664 4.297v.412c0 1.543-.222 2.975-.664 4.297-.443 1.308-1.094 2.452-1.954 3.433-.846.968-1.888 1.72-3.125 2.257-1.238.536-2.657.804-4.259.804-1.602 0-3.028-.268-4.278-.804a8.855 8.855 0 01-3.145-2.257c-.846-.98-1.49-2.125-1.934-3.433-.443-1.322-.664-2.754-.664-4.297zm5.626-.412v.412c0 .89.078 1.72.234 2.492.157.771.404 1.451.743 2.04a3.879 3.879 0 001.367 1.354c.56.327 1.244.49 2.051.49.782 0 1.452-.163 2.012-.49a3.724 3.724 0 001.348-1.354c.339-.589.586-1.269.742-2.04.17-.772.254-1.603.254-2.492v-.412c0-.864-.084-1.675-.254-2.433-.156-.772-.41-1.452-.761-2.04a3.793 3.793 0 00-1.348-1.414c-.56-.34-1.237-.51-2.032-.51-.794 0-1.472.17-2.032.51-.546.34-.996.811-1.347 1.413-.339.589-.586 1.269-.743 2.04-.156.76-.234 1.57-.234 2.434zM55.204 10.378v21.23h-5.646v-21.23h5.646zm-5.997-5.533c0-.824.286-1.504.86-2.04.572-.537 1.34-.805 2.304-.805.95 0 1.713.268 2.286.804.586.537.879 1.217.879 2.041 0 .824-.293 1.504-.88 2.04-.572.537-1.334.805-2.285.805-.964 0-1.732-.268-2.305-.804-.573-.537-.86-1.217-.86-2.041zM65.361 14.91v16.698h-5.626v-21.23h5.275l.351 4.532zm-.82 5.337h-1.524c0-1.57.202-2.982.606-4.238.404-1.269.97-2.348 1.7-3.237a7.307 7.307 0 012.597-2.06c1.016-.484 2.15-.726 3.4-.726.989 0 1.894.143 2.715.431.82.288 1.523.746 2.11 1.374.598.628 1.054 1.458 1.367 2.492.325 1.033.488 2.295.488 3.786v13.539h-5.665V18.05c0-.942-.13-1.675-.39-2.198-.261-.523-.645-.89-1.153-1.099-.495-.222-1.107-.333-1.836-.333-.756 0-1.413.15-1.973.451-.547.301-1.003.72-1.368 1.256-.351.523-.618 1.138-.8 1.844a9.083 9.083 0 00-.274 2.276z"
      ></path>
      <path
        fill="#FBAB34"
        fillRule="evenodd"
        d="M239.565 8.435c-6.94-6.94-18.19-6.94-25.13 0-6.939 6.94-6.939 18.19 0 25.13 6.94 6.94 18.19 6.94 25.13 0 6.939-6.94 6.939-18.19 0-25.129zm2.284-2.284c8.201 8.2 8.201 21.497 0 29.698s-21.497 8.201-29.698 0c-8.201-8.2-8.201-21.497 0-29.698s21.497-8.201 29.698 0zm-17.023 10.268a5.923 5.923 0 005.508 8.35 1.61 1.61 0 01.322-.015 5.923 5.923 0 005.498-5.908 5.922 5.922 0 00-5.923-5.923 5.922 5.922 0 00-5.328 3.333c-.023.056-.048.11-.077.163zm-3.699 1.46a5.885 5.885 0 00-3.281 5.275 5.923 5.923 0 005.923 5.923 5.842 5.842 0 003.861-1.452 9.157 9.157 0 01-6.503-9.747zm10.442 10.024c-1.6 2.628-4.478 4.405-7.8 4.405a9.154 9.154 0 01-9.154-9.154c0-4.588 3.38-8.35 7.766-9.019a9.147 9.147 0 017.85-4.443 9.153 9.153 0 019.154 9.154c0 4.601-3.393 8.41-7.816 9.057z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
