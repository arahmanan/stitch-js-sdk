import StitchUserIdentity from "../StitchUserIdentity";
import IStitchUserProfile from "../StitchUserProfile";

const NAME = "name";
const EMAIL = "email";
const PICTURE_URL = "picture";
const FIRST_NAME = "first_name";
const LAST_NAME = "last_name";
const GENDER = "gender";
const BIRTHDAY = "birthday";
const MIN_AGE = "min_age";
const MAX_AGE = "max_age";

/**
 * A class containing the fields returned by the Stitch client API in a user profile request.
 */
export default class StitchUserProfileImpl implements IStitchUserProfile {
  public static empty(): StitchUserProfileImpl {
    return new StitchUserProfileImpl();
  }
  /**
   * A string describing the type of this user. (Either `server` or `normal`)
   */
  public readonly userType?: string;
  /**
   * An object containing extra metadata about the user as supplied by the authentication provider.
   */
  public readonly data: { [key: string]: string };
  /**
   * An array of `StitchUserIdentity` objects representing the identities linked
   * to this user which can be used to log in as this user.
   */
  public readonly identities: StitchUserIdentity[];

  public constructor(
    userType?: string,
    data: { [key: string]: string } = {},
    identities: StitchUserIdentity[] = []
  ) {
    this.userType = userType;
    this.data = data;
    this.identities = identities;
  }

  /**
   * The full name of the user.
   */
  get name(): string | undefined {
    return this.data[NAME];
  }

  /**
   * The email address of the user.
   */
  get email(): string | undefined {
    return this.data[EMAIL];
  }

  /**
   * A URL to the user's profile picture.
   */
  get pictureURL(): string | undefined {
    return this.data[PICTURE_URL];
  }

  /**
   * The first name of the user.
   */
  get firstName(): string | undefined {
    return this.data[FIRST_NAME];
  }

  /**
   * The last name of the user.
   */
  get lastName(): string | undefined {
    return this.data[LAST_NAME];
  }

  /**
   * The gender of the user.
   */
  get gender(): string | undefined {
    return this.data[GENDER];
  }

  /**
   * The birthdate of the user.
   */
  get birthday(): string | undefined {
    return this.data[BIRTHDAY];
  }

  /**
   * The minimum age of the user.
   */
  get minAge(): number | undefined {
    const age = this.data[MIN_AGE];
    if (age === undefined) {
      return undefined;
    }
    return +age;
  }

  /**
   * The maximum age of the user.
   */
  get maxAge(): number | undefined {
    const age = this.data[MAX_AGE];
    if (age === undefined) {
      return undefined;
    }
    return +age;
  }
}