import type { Project } from "./types";

export const projects = [
  {
    name: "Cross-framework microfrontends",
    description:
      "A React shell loading an Angular 20 remote at runtime through Module Federation, with standalone components, Signals and NgRx Signal Store.",
    stack: ["React", "Angular 20", "Module Federation", "Vercel"],
    repo: "https://github.com/CarlosAlbertoR/customers-mf-angular",
    demo: "https://customers-mf-angular.vercel.app/",
  },
  {
    name: "Payment checkout",
    description:
      "A seven-step card checkout against a payment-gateway sandbox: NestJS API with TypeORM and PostgreSQL, React Native app with Redux Toolkit.",
    stack: ["NestJS", "React Native", "PostgreSQL", "Docker Compose"],
    repo: "https://github.com/CarlosAlbertoR/PaymentCheckout",
  },
] satisfies Project[];
