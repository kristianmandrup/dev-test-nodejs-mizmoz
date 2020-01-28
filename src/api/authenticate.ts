/**
 * Check the login details
 *
 * @param username
 * @param password
 */
export const basicAuth = async (username: string, password: string): Promise<boolean> =>
    await username === "username" && password === "password";
