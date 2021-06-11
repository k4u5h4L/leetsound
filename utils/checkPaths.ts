import { paths } from "@/constants/pathsToInclude";

const checkIfExists = (route: string): boolean => {
    return paths.test(route);
};

export { checkIfExists };
