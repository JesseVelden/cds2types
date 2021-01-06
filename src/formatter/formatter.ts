import { ManipulationSettings } from "ts-morph";

/**
 * Abstract formatter.
 *
 * @export
 * @abstract
 * @class Formatter
 */
export abstract class Formatter {
    /**
     * Path of the output file.
     *
     * @protected
     * @type {string}
     * @memberof Formatter
     */
    protected output: string;

    /**
     * Initialized ts-morph manipulation settings for project creation.
     *
     * @protected
     * @type {Partial<ManipulationSettings>}
     * @memberof Formatter
     */
    protected settings!: Partial<ManipulationSettings>;

    /**
     * Default constructor
     * @param {string} output Path of the output file
     * @memberof Formatter
     */
    constructor(output: string) {
        this.output = output;
    }

    /**
     * Initializes the formatter.
     *
     * @abstract
     * @returns {Promise<Formatter>} Initialized formatter
     * @memberof Formatter
     */
    public abstract init(): Promise<Formatter>;

    /**
     * Returns initialized ts-morph manipuation settings.
     *
     * @abstract
     * @returns {Promise<Partial<ManipulationSettings>>} ts-morph manipulation settings
     * @memberof Formatter
     */
    public getSettings(): Partial<ManipulationSettings> {
        return this.settings;
    }

    /**
     * Formats a given source code.
     *
     * @abstract
     * @param {string} source Source code to format
     * @returns {string} Formatted source code
     * @memberof Formatter
     */
    public abstract format(source: string): string;
}
