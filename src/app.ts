import { Server } from "./presentation/server";
import { AppRoutes } from "./presentation/routes";

async function main() {
    const server =  new Server({
        port: 3000,
        routes : AppRoutes.routes,
    });
    
    await server.start()
}

main()