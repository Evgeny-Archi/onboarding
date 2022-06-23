declare type SVGComponent = (props: import('react').SVGProps<SVGElement>) => import('react').ReactElement;

declare module '*.svg' {
    const Component: SVGComponent;

    export default Component;
}
