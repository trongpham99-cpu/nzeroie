// eslint-disable-next-line no-undef
module.exports = {
    '**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',

    '**/*.(ts|tsx|jsx|js)': filenames => [
        `pnpm eslint --fix ${filenames.join(' ')}`,
        `pnpm prettier --write ${filenames.join(' ')}`,
        // `git add .`,
    ],

    '**/*.(md|json|css|scss|html)': filenames => `pnpm prettier --write ${filenames.join(' ')}`,
};
